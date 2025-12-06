import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Drone: React.FC = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mountRef.current) return;

		const width = mountRef.current.clientWidth;
		const height = mountRef.current.clientHeight;
		console.log(width, height)
	
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
		camera.position.set(0, 1.5, 3);

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setClearColor(0x000000, 0); // transparent
		renderer.setSize(width, height);
		mountRef.current.appendChild(renderer.domElement);

		const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
		scene.add(hemiLight);
		const dirLight = new THREE.DirectionalLight(0xffffff, 1);
		dirLight.position.set(5, 10, 7);
		scene.add(dirLight);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.enableZoom = false;

		let model: THREE.Object3D | null = null;
		const animationStart = Date.now();

		const tiltX = -20 * (Math.PI / 180);
		const initialRotationY = Math.PI;

		const loader = new GLTFLoader();
		loader.load("/drone.glb", (gltf) => {
			model = gltf.scene;
			
			if (!model || !mountRef.current) return;

			const containerWidth : number = mountRef.current.clientWidth ;
			const containerHeight : number = mountRef.current.clientHeight;

			
			if(containerHeight < 400){
				console.log("hell0")
				if (containerWidth < 250){
					model.scale.set(0.7, 0.7, 0.7);
				} 
				else if (containerWidth < 300){
					model.scale.set(0.9, 0.9, 0.9);
				} 
				else if (containerWidth < 500){
					model.scale.set(1, 1, 1);
				} 
				else if (containerWidth < 700){
					model.scale.set(1.1, 1.1, 1.1);
				} 
				else{
					model.scale.set(1, 1, 1);
				}
			}
			else{
				if(containerWidth <= 350){
					model.scale.set(0.35, 0.35, 0.35)  
				}
				else if(containerWidth <= 415){
					model.scale.set(0.4, 0.4, 0.4)  
				}
				else if(containerWidth <= 500){
					model.scale.set(0.5, 0.5, 0.5)  
				}
				else if(containerWidth <= 600) {
					model.scale.set(0.6, 0.6, 0.6)  
				}
				else if (containerWidth < 700){
					model.scale.set(0.8, 0.8, 0.8);
				} 
				else{
					model.scale.set(0.8, 0.8, 0.8);
				}
			}


			
			model.position.set(0, 0, 0);

			model.rotation.set(tiltX, initialRotationY, 0);

			scene.add(model);
			renderer.setSize(containerWidth, containerHeight);
		});

		const handleResize = () => {
			if (!mountRef.current) return;
			const w = mountRef.current.clientWidth;
			const h = mountRef.current.clientHeight;

			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);

			if (model) {
				if (w < 640) model.scale.set(0.5, 0.5, 0.5);
				else if (w < 1024) model.scale.set(0.7, 0.7, 0.7);
				else model.scale.set(0.8, 0.8, 0.8);
			}
		};

		window.addEventListener("resize", handleResize);


		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();

			const elapsed = (Date.now() - animationStart) / 1000;

			if (model) {
				model.position.y += Math.sin(elapsed * 2) * 0.002;
				model.rotation.y = initialRotationY + Math.sin(elapsed) * 1;
				model.rotation.x = tiltX + Math.sin(elapsed * 1.5) * 0.1;
				model.position.x = Math.sin(elapsed) * 0.5; 
			}

			renderer.render(scene, camera);
		};
		animate();


		return () => {
			window.removeEventListener("resize", handleResize);

			if (model) {
			model.traverse((child) => {
				if (child instanceof THREE.Mesh) {

					if (child.geometry) {
						child.geometry.dispose();
					}

					const material = child.material;

					if (Array.isArray(material)) {
						material.forEach((m) => {
							if ("map" in m && m.map) {
								m.map.dispose();
							}
							m.dispose();
						});
					} 
					else if (material) {
						if ("map" in material && material.map) {
							material.map.dispose();
						}
						material.dispose();
					}
				}
			});
			}


			if (renderer.domElement && renderer.domElement.parentNode) {
				renderer.domElement.parentNode.removeChild(renderer.domElement);
			}

			renderer.dispose();
			scene.clear();
		};

	}, []);

	return (
		<div
		ref={mountRef}
			style={{
				width: "100%",
				height: "100%",
				background: "transparent",
			}}
		/>
  	);
};

export default Drone;
