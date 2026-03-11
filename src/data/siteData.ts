export const siteData = {
    company: {
        name: "Triotect & Associates",
        tagline: "Ltd.",
        description: "We provide comprehensive architecture, interior design, master planning, and engineering consultancy services to create functional and modern spaces.",
        mission: "Our mission is to deliver thoughtful design, robust engineering, and efficient project management solutions tailored to our clients' needs.",
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
            youtube: "#",
        },
        contact: {
            address: "15/E, 2nd Floor, North Girls School Rd, Dhaka-1205",
            phones: ["01777768366", "01312-874601"],
            email: "mail@triotect.com.bd",
            workingHours: {
                weekdays: "Sunday – Thursday: 9 AM – 6 PM",
                friday: "Friday & Saturday: Closed",
            }
        }
    },
    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Why Us", href: "/why-us" },
        { label: "Projects", href: "/projects" },
        { label: "Clients", href: "/clients" },
        { label: "Contact", href: "/contact" },
    ],
    hero: {
        tagline: "Dhaka, Bangladesh",
        title: {
            main: "Design & Engineering",
            accent: "Excellence"
        },
        subtitle: "From corporate interiors to large-scale master planning — we design, engineer, and manage projects with precision.",
        slides: [
            { image: "/img/img1.jpg", alt: "Corporate office interior" },
            { image: "/img/img2.jpg", alt: "Residential architecture" },
            { image: "/img/img3.jpg", alt: "Master planning" },
        ]
    },
    services: [
        {
            id: "architecture",
            icon: "building-columns",
            title: "Architecture",
            description: "Complete architectural design for residential, commercial, and industrial projects."
        },
        {
            id: "interior-design",
            icon: "couch",
            title: "Interior Design",
            description: "Modern interior solutions for corporate branches, offices, and residential spaces."
        },
        {
            id: "mep",
            icon: "plug",
            title: "MEP Engineering",
            description: "Mechanical, electrical, and plumbing engineering services for optimal building functionality."
        },
        {
            id: "planning",
            icon: "drafting-compass",
            title: "Master Planning",
            description: "Large-scale urban and housing master plans, integrating infrastructure and landscapes."
        },
        {
            id: "structural",
            icon: "layer-group",
            title: "Structural Engineering",
            description: "Robust structural design and consulting for safety and durability."
        },
        {
            id: "project-management",
            icon: "chart-gantt",
            title: "Project Management",
            description: "End-to-end project management consultancy (PMC) to ensure timely and accurate execution."
        }
    ],
    stats: [
        { label: "Completed Projects", value: 100, suffix: "+" },
        { label: "Years of Experience", value: 10, suffix: "+" },
        { label: "Corporate Clients", value: 40, suffix: "+" },
        { label: "Design Disciplines", value: 5, suffix: "" },
    ],
    projects: [
        {
            id: "prime-bank",
            slug: "prime-bank-securities",
            name: "Prime Bank Securities Ltd",
            location: "DSC office, Nikunja-2",
            category: "Commercial Interior",
            image: "/img/projects/prime-bank1.jpg",
            bannerImage: "/img/projects/prime-bank2.jpg",
            tags: ["Commercial", "Interior", "Corporate", "Office"],
            overview: [
                "A modern branch office interior designed for Prime Bank Securities Ltd.",
                "The project focuses on a professional, efficient, and welcoming environment for clients and staff.",
                "Triotect & Associates Ltd. provided architectural design, MEP engineering, and project management consultancy.",
                "The design emphasizes sharp details and functional spaces to align with the corporate identity of the bank."
            ],
            designCredits: "Designed by Ar. Monasur Rahman Ratul, Ar. Khondokar Arifuzzaman, and Ar. Tareq Abdullah.",
            details: [
                { label: "Category", value: "Commercial Interior" },
                { label: "Studio", value: "Triotect & Associates Ltd." },
                { label: "Services", value: "Architecture, MEP, PMC" },
                { label: "Location", value: "Nikunja-2, Dhaka" },
                { label: "Status", value: "Completed" }
            ],
            services: ["Interior Design", "MEP Engineering", "Project Management"],
            credits: [
                { label: "Design Team", value: "Triotect & Associates Ltd." }
            ],
            gallery: [
                { image: "/img/projects/prime-bank1.jpg", alt: "Office interior view", full: true },
                { image: "/img/projects/prime-bank2.jpg", alt: "Office interior view" },
                { image: "/img/projects/prime-bank3.jpg", alt: "Office interior view" },
                { image: "/img/projects/prime-bank4.jpg", alt: "Office interior view" },
                { image: "/img/projects/prime-bank5.jpg", alt: "Office interior view" },
                { image: "/img/projects/prime-bank6.jpg", alt: "Office interior view" },
                { image: "/img/projects/prime-bank7.jpg", alt: "Office interior view", full: true },
            ],
            relatedIds: ["fatima-garden", "ansar-housing"]
        },
        {
            id: "fatima-garden",
            slug: "fatima-garden",
            name: "Fatima Garden",
            location: "Kachait Bazar, Brahmanbaria",
            category: "Residential Architecture",
            image: "/img/projects/fatima-garden1.jpg",
            bannerImage: "/img/projects/fatima-garden2.jpg",
            tags: ["Residential", "Architecture", "Landscape"],
            overview: [
                "Fatima Garden is a residential architectural project located in Brahmanbaria.",
                "The design integrates natural elements and open spaces to create a serene living environment.",
                "Triotect delivered the architectural layout, MEP, and project management, alongside structural engineering by Engg. Ahsan Habib.",
                "The project balances functional living areas with thoughtful aesthetic details."
            ],
            designCredits: "Designed by Ar. Monasur Rahman Ratul, Ar. Khondokar Arifuzzaman, and Ar. Tareq Abdullah.",
            details: [
                { label: "Category", value: "Residential" },
                { label: "Studio", value: "Triotect & Associates Ltd." },
                { label: "Services", value: "Architecture, Structural, MEP, PMC" },
                { label: "Location", value: "Kachait Bazar, Brahmanbaria" },
                { label: "Status", value: "Completed" }
            ],
            services: ["Architecture", "Structural Engineering", "MEP", "PMC"],
            credits: [
                { label: "Design Team", value: "Triotect & Associates Ltd." }
            ],
            gallery: [
                { image: "/img/projects/fatima-garden1.jpg", alt: "Building exterior", full: true },
                { image: "/img/projects/fatima-garden2.jpg", alt: "Building view" },
                { image: "/img/projects/fatima-garden3.jpg", alt: "Building view" },
                { image: "/img/projects/fatima-garden4.jpg", alt: "Building view" },
                { image: "/img/projects/fatima-garden5.jpg", alt: "Building view" },
                { image: "/img/projects/fatima-garden6.jpg", alt: "Building view" },
                { image: "/img/projects/fatima-garden7.jpg", alt: "Building exterior", full: true },
            ],
            relatedIds: ["prime-bank", "ansar-housing"]
        },
        {
            id: "ansar-housing",
            slug: "ansar-housing",
            name: "Bangladesh Ansar Housing Project",
            location: "Kalinagar, Sirajdikhan, Munshiganj",
            category: "Master Planning",
            image: "/img/projects/ansar-housing1.jpg",
            bannerImage: "/img/projects/ansar-housing1.jpg",
            tags: ["Master Plan", "Housing", "Urban Planning"],
            overview: [
                "A visionary 300-acre housing master plan (Phase 1) for Bangladesh Ansar personnel and their community.",
                "The project features a grand entrance, landscaped avenues, wide roads, bicycle paths, and green recreational spaces like football fields.",
                "Triotect & Associates Ltd. is leading the master planning and design consultancy.",
                "The layout ensures a thoughtful integration of aesthetics, functionality, and sustainability for a modern residential environment."
            ],
            designCredits: "Master planning and design consultancy by Triotect & Associates Ltd.",
            details: [
                { label: "Category", value: "Master Planning" },
                { label: "Studio", value: "Triotect & Associates Ltd." },
                { label: "Services", value: "Master Planning, Design Consultancy" },
                { label: "Location", value: "Sirajdikhan, Munshiganj" },
                { label: "Status", value: "Ongoing" }
            ],
            services: ["Master Planning", "Urban Design", "Consultancy"],
            credits: [
                { label: "Design Team", value: "Triotect & Associates Ltd." }
            ],
            gallery: [
                { image: "/img/projects/ansar-housing1.jpg", alt: "Ansar Housing Project Master Plan", full: true }
            ],
            relatedIds: ["fatima-garden", "prime-bank"]
        }
    ],
    testimonials: [
        {
            quote: "Triotect managed our branch interior with excellent attention to detail. The space reflects our corporate identity perfectly.",
            author: "Corporate Client",
            role: "Prime Bank Securities",
            avatar: "/img/img1.jpg"
        },
        {
            quote: "The architectural layout for Fatima Garden is beautiful and highly functional. The team handled everything from design to MEP seamlessly.",
            author: "Adv. Bakir Uddin",
            role: "Residential Client",
            avatar: "/img/img2.jpg"
        },
        {
            quote: "Their master planning capabilities for our large-scale housing project are impressive. They integrated modern urban planning with green spaces expertly.",
            author: "Project Coordinator",
            role: "Bangladesh Ansar",
            avatar: "/img/img3.jpg"
        }
    ],
    clients: [
        "Prime Bank Securities", "Bangladesh Ansar", "Adv. Bakir Uddin", "Corporate Offices",
        "Residential Developers", "Commercial Clients", "Government Projects", "Real Estate Investors"
    ],
    faqs: [
        {
            question: "What types of projects do you handle?",
            answer: "We handle corporate interiors, residential architecture, structural engineering, and large-scale urban master planning."
        },
        {
            question: "Do you provide MEP engineering?",
            answer: "Yes, we provide full Mechanical, Electrical, and Plumbing (MEP) design alongside our architectural services."
        },
        {
            question: "How do I start a project with you?",
            answer: "You can call us at 01777768366 or email mail@triotect.com.bd to schedule a consultation at our Dhaka office."
        },
        {
            question: "Do you offer project management services?",
            answer: "Yes. Triotect offers comprehensive Project Management Consultancy (PMC) to oversee construction and ensure quality."
        }
    ],
    theme: {
        colors: {
            orange: "#FFCC00",
            orangeDark: "#CCA300",
            orangeSoft: "rgba(255, 204, 0, 0.12)",
            black: "#000000",
            dark: "#1a1a1a",
            dark2: "#242424",
            dark3: "#2e2e2e",
            gray: "#888",
            grayLight: "#aaa",
            white: "#ffffff",
            whiteSoft: "rgba(255, 255, 255, 0.08)",
        },
        typography: {
            fontHead: "'Playfair Display', Georgia, serif",
            fontBody: "'DM Sans', sans-serif"
        }
    },
    homePage: {
        servicesPreview: {
            tagline: "What We Do",
            titleMain: "Our Core ",
            titleAccent: "Services",
            description: "From architectural drafting and master planning to MEP engineering and project management.",
            buttonText: "Learn More",
            buttonAllText: "View All Services",
            buttonAllLink: "/services"
        },
        featuredProjects: {
            tagline: "Portfolio",
            titleMain: "Featured ",
            titleAccent: "Projects",
            buttonAllText: "View All Projects",
            buttonAllLink: "/projects",
            buttonText: "View Project"
        },
        testimonials: {
            tagline: "What Clients Say",
            titleMain: "Client ",
            titleAccent: "Testimonials"
        },
        aboutSnippet: {
            badgeNum: "10+",
            badgeLabel: "Years of Experience",
            image: "/img/img6.jpg",
            tagline: "Our Firm",
            titleMain: "Design meets ",
            titleAccent: "Engineering",
            paragraphs: [
                "Triotect & Associates Ltd. is an architecture, engineering, and project management consultancy based in Dhaka, Bangladesh.",
                "We deliver integrated solutions covering architectural design, structural engineering, and MEP services to ensure projects are built efficiently and effectively."
            ],
            features: [
                "Architectural & interior design",
                "MEP & structural engineering",
                "Master planning",
                "Project Management Consultancy"
            ],
            buttonText: "Discover Our Firm",
            buttonLink: "/about"
        },
        ctaBanner: {
            tagline: "Start Your Project",
            titleMain: "Ready to Plan ",
            titleAccent: "Your Space?",
            description: "Contact us today for architecture, interior design, or engineering consultancy.",
            buttonText: "Call Now: 01777768366",
            buttonLink: "/contact"
        }
    },
    aboutPage: {
        hero: {
            title: "About Triotect & Associates Ltd.",
            subtitle: "Architecture, engineering, and consultancy services based in Dhaka.",
            image: "/img/img5.jpg",
            label: "Get to Know Us"
        },
        story: {
            tagline: "Our Firm",
            titleMain: "Integrated Design ",
            titleAccent: "& Engineering",
            paragraphs: [
                "Triotect & Associates Ltd. provides a complete suite of building design services, including architecture, interior design, and master planning.",
                "We back our designs with strong technical capabilities, offering MEP engineering, structural design, and robust project management consultancy.",
                "From corporate bank interiors to expansive 300-acre housing master plans, our team focuses on detail, functionality, and successful project delivery."
            ],
            image: "/img/img6.jpg",
            badgeNum: "100+",
            badgeLabel: "Projects Done",
            buttonText: "Consult With Us",
            buttonLink: "/contact"
        },
        team: {
            tagline: "The People",
            titleMain: "Meet Our ",
            titleAccent: "Expert Team",
            description: "A skilled group of architects and engineers dedicated to project excellence.",
            members: [
                { name: "Ar. Monasur Rahman Ratul", role: "Design Architect", img: "/img/img1.jpg" },
                { name: "Ar. Khondokar Arifuzzaman", role: "Design Architect", img: "/img/img1.jpg" },
                { name: "Ar. Tareq Abdullah", role: "Design Architect", img: "/img/img1.jpg" }
            ]
        },
        missionVision: {
            tagline: "Our Principles",
            titleMain: "Mission ",
            titleAccent: "& Vision",
            items: [
                {
                    icon: "bullseye",
                    title: "Our Mission",
                    description: "To deliver functional architecture and reliable engineering services that meet the practical needs of our clients."
                },
                {
                    icon: "eye",
                    title: "Our Vision",
                    description: "To be a leading multidisciplinary consultancy firm recognized for quality design and project management."
                },
                {
                    icon: "drafting-compass",
                    title: "Our Approach",
                    description: "We combine design creativity with technical engineering precision to ensure spaces are both beautiful and operational."
                },
                {
                    icon: "users",
                    title: "Client Focus",
                    description: "We work closely with clients throughout the design and construction process to ensure their vision is realized accurately."
                }
            ]
        },
        ctaBanner: {
            tagline: "Consult With Us",
            titleMain: "Have a Project in Mind?",
            titleAccent: "",
            description: "Contact our Dhaka office today to schedule a consultation.",
            buttonText: "Call: 01777768366",
            buttonLink: "/contact"
        }
    },
    servicesPage: {
        hero: {
            title: "Our Services",
            subtitle: "Architecture, engineering, master planning, and project management.",
            image: "/img/img5.jpg",
            label: "What We Offer"
        },
        expertise: {
            tagline: "Our Expertise",
            titleMain: "Comprehensive Design ",
            titleAccent: "& Engineering",
            description: "We provide an integrated approach, offering architectural design alongside structural and MEP engineering."
        },
        process: {
            tagline: "How We Work",
            titleMain: "Our Consulting ",
            titleAccent: "Process",
            steps: [
                { step: "01", title: "Consultation", icon: "magnifying-glass", desc: "Understanding client requirements, site context, and project goals." },
                { step: "02", title: "Design Concept", icon: "cube", desc: "Developing architectural layouts, interior concepts, or master plans." },
                { step: "03", title: "Engineering Integration", icon: "drafting-compass", desc: "Integrating MEP and structural engineering into the architectural design." },
                { step: "04", title: "Project Management", icon: "flag-checkered", desc: "Overseeing execution to ensure accurate construction and quality control." }
            ]
        },
        ctaBanner: {
            tagline: "Start Planning",
            titleMain: "Ready to Start Your ",
            titleAccent: "Project?",
            description: "Reach out to discuss your architectural or engineering needs.",
            buttonText: "Call: 01777768366",
            buttonLink: "/contact"
        }
    },
    projectsPage: {
        hero: {
            title: "Our Projects",
            subtitle: "Corporate interiors, residential buildings, and master planning developments.",
            image: "/img/img4.jpg",
            label: "Portfolio"
        },
        portfolio: {
            tagline: "Selected Works",
            titleMain: "Explore Our ",
            titleAccent: "Portfolio"
        },
        ctaBanner: {
            tagline: "Start Your Project",
            titleMain: "Inspired by Our ",
            titleAccent: "Work?",
            description: "Contact us to discuss your project requirements.",
            buttonText: "Call: 01777768366",
            buttonLink: "/contact"
        }
    },
    contactPage: {
        hero: {
            title: "Contact Us",
            subtitle: "Get in touch with Triotect for your next design or engineering project.",
            image: "/img/img1.jpg",
            label: "Get in Touch"
        },
        form: {
            tagline: "Request Consultation",
            titleMain: "Discuss Your ",
            titleAccent: "Project",
            description: "Fill out the form below or call us directly at 01777768366.",
            buttonText: "Submit Inquiry",
            services: [
                "Architecture",
                "Interior Design",
                "Master Planning",
                "MEP Engineering",
                "Structural Engineering",
                "Project Management",
                "Other"
            ]
        },
        info: {
            googleMapsUrl: "https://maps.google.com/maps?q=Janata+Housing,+Adabor,+Dhaka,+Bangladesh&output=embed&z=15",
            socialTitle: "Follow Triotect"
        },
        faq: {
            tagline: "Common Questions",
            titleMain: "Frequently ",
            titleAccent: "Asked Questions"
        }
    },
    clientsPage: {
        hero: {
            title: "Our Clients",
            subtitle: "Trusted by corporations, developers, and institutions.",
            image: "/img/img4.jpg",
            label: "Partners & Clients"
        },
        clientLogos: {
            tagline: "Our Network",
            titleMain: "Trusted by ",
            titleAccent: "Our Clients",
            description: "From corporate banks to government institutions, our clients rely on us for accurate design and engineering execution."
        },
        testimonials: {
            tagline: "Client Feedback",
            titleMain: "What Our Clients ",
            titleAccent: "Say",
            list: [
                {
                    name: "Corporate Client",
                    role: "Prime Bank Securities",
                    quote: "Triotect managed our branch interior with excellent attention to detail. The space reflects our corporate identity perfectly.",
                    avatar: "/img/img1.jpg"
                },
                {
                    name: "Adv. Bakir Uddin",
                    role: "Residential Client",
                    quote: "The architectural layout for Fatima Garden is beautiful and highly functional. The team handled everything from design to MEP seamlessly.",
                    avatar: "/img/img2.jpg"
                },
                {
                    name: "Project Coordinator",
                    role: "Bangladesh Ansar",
                    quote: "Their master planning capabilities for our large-scale housing project are impressive. They integrated modern urban planning with green spaces expertly.",
                    avatar: "/img/img3.jpg"
                }
            ]
        },
        ctaBanner: {
            tagline: "Partner With Us",
            titleMain: "Ready to Start Your ",
            titleAccent: "Next Project?",
            description: "Contact Triotect to discuss your design and engineering requirements.",
            buttonText: "Call: 01777768366",
            buttonLink: "/contact"
        }
    },
    whyUsPage: {
        hero: {
            title: "Why Triotect",
            subtitle: "The advantage of choosing an integrated design and engineering firm.",
            image: "/img/img1.jpg",
            label: "Our Advantage"
        },
        differentiators: {
            tagline: "Our Distinctions",
            titleMain: "Integrated Design, ",
            titleAccent: "Reliable Engineering",
            description: "Here is why clients choose Triotect & Associates Ltd. for their construction and design projects."
        },
        features: [
            {
                num: "01",
                label: "Multidisciplinary Team",
                title: "Architecture & Engineering Together",
                desc: "We provide architectural design alongside MEP and structural engineering, ensuring all building systems are coordinated seamlessly from the start.",
                list: ["In-house architecture team", "Integrated MEP services", "Structural coordination", "Fewer design conflicts"],
                img: "/img/img3.jpg",
                reverse: false
            },
            {
                num: "02",
                label: "Master Planning",
                title: "Large-Scale Capability",
                desc: "We have the expertise to plan massive developments, such as 300-acre housing projects, integrating infrastructure, roads, and landscape architecture.",
                list: ["Urban planning expertise", "Infrastructure integration", "Landscape design", "Zoning and spatial layout"],
                img: "/img/img4.jpg",
                reverse: true
            },
            {
                num: "03",
                label: "Project Management",
                title: "End-to-End Oversight",
                desc: "Our Project Management Consultancy (PMC) ensures that what we design is built accurately, on time, and within budget constraints.",
                list: ["Site supervision", "Quality control", "Timeline management", "Contractor coordination"],
                img: "/img/img5.jpg",
                reverse: false
            },
            {
                num: "04",
                label: "Detail Oriented",
                title: "Precision in Every Space",
                desc: "Whether it is a corporate bank interior or a residential garden, we focus on the fine details that make a space highly functional and visually appealing.",
                list: ["Custom interior layouts", "Material selection", "Lighting and ceiling details", "Brand identity integration"],
                img: "/img/img2.jpg",
                reverse: true
            }
        ],
        ctaBanner: {
            tagline: "Work With Us",
            titleMain: "Ready to Partner With ",
            titleAccent: "Triotect?",
            description: "Call us today to discuss your architecture, interior, or planning project.",
            buttonText: "Call: 01777768366",
            buttonLink: "/contact"
        }
    }
};