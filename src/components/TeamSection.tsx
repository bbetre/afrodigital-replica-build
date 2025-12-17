import { Users, Linkedin, X } from "lucide-react";
import { useState } from "react";
import betermariyamProfilePic from "@/assets/1728312666234.jpeg";
import edomProfilePic from "@/assets/2025-11-20 22.39.35.jpg";
import amanuelProfilePic from "@/assets/2025-11-20 22.40.27.jpg";
import mohammedProfilePic from "@/assets/2025-11-20 22.40.39.jpg";
import birukProfilePic from "@/assets/2025-11-21 10.24.45.jpg";
import yodaheProfilePic from "@/assets/IMAGE 2025-12-17 11:58:58.jpg";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const team = [
    {
        name: "BetreMariyam Yosef",
        role: "Digital Lead",
        description: "As the Founder and Digital Lead, BetreMariyam is a seasoned Full-Stack Developer with deep expertise in Artificial Intelligence. He architects and builds robust, scalable applications, integrating cutting-edge AI solutions to drive innovation and deliver intelligent digital experiences.",
        image: betermariyamProfilePic,
        linkedin: "https://www.linkedin.com/in/betremariyamyosef/",
        socials: {
            linkedin: "https://www.linkedin.com/in/betremariyamyosef/",
        },
        skills: ["Full-Stack Development", "AI Strategy", "Cybersecurity", "Leadership"]
    },
    {
        name: "Amanuel Alemu",
        role: "Security Solutions",
        description: "Holds certifications in Cybersecurity and Cybersecurity Tools & Cyberattacks. Also lists IT Hardware Support and Project Management as top skills, essential for securing infrastructure.",
        image: amanuelProfilePic,
        linkedin: "https://www.linkedin.com/in/amanuel-alemu-407b2a325/",
        socials: {
            linkedin: "https://www.linkedin.com/in/amanuel-alemu-407b2a325/",
        },
        skills: ["Cybersecurity", "IT Support", "Project Management", "Network Security"]
    },
    {
        name: "Mohammed Salih",
        role: "AI Integration",
        description: "Experienced Junior Full Stack Developer proficient in React, Rails, and API Development. His foundational skills in building data-driven applications provide a solid basis for learning and integrating AI services.",
        image: mohammedProfilePic,
        linkedin: "https://www.linkedin.com/in/mohammed-salih-245307333/",
        socials: {
            linkedin: "https://www.linkedin.com/in/mohammed-salih-245307333/",
        },
        skills: ["React", "Node.js", "API Development", "AI Integration"]
    },
    {
        name: "Edom Mulugeta",
        role: "Application & Software Development",
        description: "Strong full-stack programming skills in Java, JavaScript, Express Js, and Python. Experienced in developing multiple full-stack websites, including an e-commerce platform and a project management system.",
        image: edomProfilePic,
        linkedin: "https://www.linkedin.com/in/edom-mulugeta-88870027a/",
        socials: {
            linkedin: "https://www.linkedin.com/in/edom-mulugeta-88870027a/",
        },
        skills: ["Java", "JavaScript", "Python", "Full-Stack Development"]
    },
    {
        name: "Biruk Damtew",
        role: "Cloud & DevOps",
        description: "Biruk oversees the infrastructure, automation, and continuous delivery pipelines, ensuring robust and scalable cloud solutions for our clients.",
        image: birukProfilePic,
        skills: ["Cloud Infrastructure", "DevOps", "Automation", "CI/CD"]
    },
    {
        name: "Yodahe Eshetu",
        role: "Backend Expert",
        description: "Backend expert focused on building reliable, scalable server-side systems and APIs.",
        image: yodaheProfilePic,
        skills: ["Backend Development", "API Design", "Databases", "Scalability"]
    },
];

const TeamSection = () => {
    const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

    return (
        <section className="py-16 relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">
                            Our Team
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        Meet Our Experts
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The brilliant minds driving innovation at AfroDigital
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="relative mb-6 w-32 h-32 md:w-40 md:h-40">
                                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-border to-border group-hover:from-accent group-hover:to-accent/50 transition-all duration-500 transform group-hover:scale-105">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                                {member.name}
                            </h3>

                            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
                <DialogContent className="sm:max-w-5xl bg-card/95 backdrop-blur-xl border-accent/20 p-0 overflow-hidden shadow-2xl">
                    {selectedMember && (
                        <div className="flex flex-col md:flex-row h-[85vh] md:h-auto">
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/90" />
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative overflow-y-auto">
                                <DialogHeader className="mb-8 text-left">
                                    <DialogTitle className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                                        {selectedMember.name}
                                    </DialogTitle>
                                    <DialogDescription className="text-accent font-bold uppercase tracking-widest text-base md:text-lg">
                                        {selectedMember.role}
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-8">
                                    <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                        {selectedMember.description}
                                    </p>

                                    {selectedMember.skills && (
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Expertise</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedMember.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedMember.socials && (
                                        <div className="flex gap-4 pt-8 border-t border-border/50">
                                            {selectedMember.socials.linkedin && (
                                                <a
                                                    href={selectedMember.socials.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                                                >
                                                    <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-white transition-colors">
                                                        <Linkedin className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-base font-medium">Connect on LinkedIn</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default TeamSection;
