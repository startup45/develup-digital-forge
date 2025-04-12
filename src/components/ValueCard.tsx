
import React, { useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import * as THREE from 'three';

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon: Icon }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(60, 60);
    renderer.setClearColor(0x000000, 0);
    
    // Clear any existing canvas
    if (canvasRef.current.firstChild) {
      canvasRef.current.removeChild(canvasRef.current.firstChild);
    }
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create animated geometry based on title (deterministic)
    let geometry;
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Use hash to determine geometry type
    switch (hash % 4) {
      case 0:
        geometry = new THREE.OctahedronGeometry(1.5, 0);
        break;
      case 1:
        geometry = new THREE.TetrahedronGeometry(1.8, 0);
        break;
      case 2:
        geometry = new THREE.IcosahedronGeometry(1.5, 0);
        break;
      default:
        geometry = new THREE.DodecahedronGeometry(1.5, 0);
    }
    
    // Use custom color based on title
    const hue = (hash % 360) / 360;
    const colorHSL = new THREE.Color().setHSL(hue, 0.8, 0.6);
    
    const material = new THREE.MeshPhongMaterial({
      color: colorHSL,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate based on title length (creates variety)
      shape.rotation.x += 0.01 + (title.length % 5) * 0.001;
      shape.rotation.y += 0.01 + (title.length % 3) * 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      scene.remove(shape);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [title]);

  return (
    <div className="flex gap-4 p-6 rounded-lg glass-morphism hover:bg-white/10 transition-colors duration-300">
      <div className="shrink-0">
        <div className="bg-develup-purple/10 p-3 rounded-lg flex items-center justify-center">
          <div ref={canvasRef} className="w-6 h-6 mr-2"></div>
          <Icon className="w-6 h-6 text-develup-purple" />
        </div>
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
