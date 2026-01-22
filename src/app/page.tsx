"use client";

import Header from "@/components/Header";
import ManifestoHero from "@/components/ManifestoHero";
import OriginStory from "@/components/OriginStory";
import Resilience from "@/components/Resilience";
import PhilosophyGrid from "@/components/PhilosophyGrid";
import TechManifesto from "@/components/TechManifesto";
import CommunityImpact from "@/components/CommunityImpact";
import Foundation from "@/components/Foundation"; // New V6.6

export default function Home() {
    return (
        <div className="bg-obsidian min-h-screen text-ash selection:bg-ash selection:text-obsidian">
            {/* Noise Texture Overlay */}
            <div className="texture-noise" />

            <Header />

            <main>
                <ManifestoHero />
                <OriginStory />
                <Resilience />
                <PhilosophyGrid />
                <TechManifesto />
                <CommunityImpact />
                <Foundation />
            </main>
        </div>
    );
}
