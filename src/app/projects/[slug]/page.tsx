"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { notFound } from "next/navigation";

//d

const ProjectDetailPage = () => {
    const params = useParams();
    const slug = params.slug;

    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const project = siteData.projects.find(p => p.slug === slug);

    if (!project) {
        return notFound();
    }

    const relatedProjects = siteData.projects
        .filter(p => (project as any).relatedIds?.includes(p.id))
        .slice(0, 2);

    return (
        <main>
            {/* HERO */}
            <section className="project-detail-hero">
                <img
                    src={project.bannerImage}
                    alt={project.name}
                    onClick={() => setLightboxImage(project.bannerImage)}
                    style={{ cursor: "zoom-in" }}
                />
                <div className="project-detail-hero-content">
                    <div className="breadcrumb">
                        <Link href="/projects">Projects</Link>
                        <span>/</span>
                        {project.name}
                    </div>
                    <div className="project-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="project-tag">{tag}</span>
                        ))}
                    </div>
                    <h1>{project.name}</h1>
                </div>
            </section>

            {/* BODY */}
            <section className="project-body">
                <div className="container">
                    <div className="project-body-grid">

                        {/* MAIN CONTENT */}
                        <div className="project-main fade-in-left">
                            <h2>Project Overview</h2>
                            {project.overview.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            <h2 style={{ marginTop: "3rem" }}>Design & Credits</h2>
                            <p>{project.designCredits}</p>

                            <div className="project-gallery">
                                {project.gallery.map((img: any, i) => (
                                    <div
                                        key={i}
                                        className={`project-gallery-img ${img.full ? "full" : ""} ${img.span2 ? "span2" : ""}`}
                                        onClick={() => setLightboxImage(img.image)}
                                        style={{ cursor: "zoom-in" }}
                                    >
                                        <img src={img.image} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <div className="project-sidebar fade-in-right">
                            <div className="project-info-card">
                                <h4>Project Details</h4>
                                {project.details.map((detail, i) => (
                                    <div key={i} className="info-row">
                                        <span className="key">{detail.label}</span>
                                        <span className="val">{detail.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="project-info-card">
                                <h4>Services Provided</h4>
                                {project.services.map((service, i) => (
                                    <div key={i} className="info-row">
                                        <span className="key">
                                            <i className="fa-solid fa-check" style={{ color: "var(--orange)" }}></i>
                                        </span>
                                        <span className="val">{service}</span>
                                    </div>
                                ))}
                            </div>

                            {project.location && (
                                <div className="project-info-card" style={{ borderLeft: "3px solid var(--orange)" }}>
                                    <h4>Location</h4>
                                    <div className="location-text" style={{ padding: "0.5rem 0", color: "var(--white)", fontSize: "0.9rem" }}>
                                        <i className="fa-solid fa-location-dot" style={{ color: "var(--orange)", marginRight: "0.5rem" }}></i>
                                        {project.location}
                                    </div>
                                </div>
                            )}

                            {project.credits && (
                                <div className="project-info-card" style={{ borderLeft: "3px solid var(--orange)" }}>
                                    <h4>Project Credits</h4>
                                    {project.credits.map((c, i) => (
                                        <div key={i} className="info-row">
                                            <span className="key">{c.label}</span>
                                            <span className="val" style={{ color: "var(--orange)", fontWeight: 600 }}>{c.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
                                Start a Similar Project <i className="fa-solid fa-arrow-right" style={{ marginLeft: "0.5rem" }}></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* RELATED */}
            {relatedProjects.length > 0 && (
                <section className="related-projects">
                    <div className="container">
                        <div className="section-head" style={{ marginBottom: "2.5rem" }}>
                            <span className="section-label">Explore More</span>
                            <h2 className="section-title">Related <span>Projects</span></h2>
                            <div className="underline-accent"></div>
                        </div>
                        <div className="projects-grid">
                            {relatedProjects.map(rp => (
                                <div key={rp.id} className="project-card">
                                    <img src={rp.image} alt={rp.name} />
                                    <div className="project-overlay">
                                        <div className="project-cat">{rp.category}</div>
                                        <h3 className="project-name">{rp.name}</h3>
                                        <Link href={`/projects/${rp.slug}`} className="btn btn-primary btn-sm project-btn">
                                            View Project
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* LIGHTBOX OVERLAY */}
            {lightboxImage && (
                <div
                    className="lightbox-overlay"
                    onClick={() => setLightboxImage(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 99999,
                        cursor: "zoom-out"
                    }}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage(null);
                        }}
                        style={{
                            position: "absolute",
                            top: "2rem",
                            right: "2rem",
                            background: "transparent",
                            border: "none",
                            color: "white",
                            fontSize: "3rem",
                            cursor: "pointer",
                            lineHeight: 1,
                            zIndex: 100000
                        }}
                        aria-label="Close Lightbox"
                    >
                        &times;
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Fullscreen View"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                            cursor: "default",
                            boxShadow: "0 0 20px rgba(0,0,0,0.5)"
                        }}
                    />
                </div>
            )}
        </main>
    );
};

export default ProjectDetailPage;
