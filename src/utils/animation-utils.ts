import type { Transition, Variant, Variants } from "motion/react";

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// ============================================
// SPRING & EASING PRESETS
// ============================================

export const springs = {
    gentle: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        mass: 0.5,
    },
    smooth: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 0.8,
    },
    snappy: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        mass: 1,
    },
};

export const easings = {
    easeOut: [0.16, 1, 0.3, 1] as const,
    easeInOut: [0.87, 0, 0.13, 1] as const,
    premium: [0.4, 0, 0.2, 1] as const, // Apple-like easing
};

// ============================================
// SCROLL REVEAL VARIANTS
// ============================================

export const fadeIn = (delay = 0): Variants => ({
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: prefersReducedMotion() ? 0.01 : 0.6,
            delay: prefersReducedMotion() ? 0 : delay,
            ease: easings.premium,
        },
    },
});

export const fadeUp = (delay = 0, distance = 30): Variants => ({
    hidden: {
        opacity: 0,
        y: prefersReducedMotion() ? 0 : distance,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: prefersReducedMotion() ? 0.01 : 0.6,
            delay: prefersReducedMotion() ? 0 : delay,
            ease: easings.premium,
        },
    },
});

export const fadeDown = (delay = 0, distance = 30): Variants => ({
    hidden: {
        opacity: 0,
        y: prefersReducedMotion() ? 0 : -distance,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: prefersReducedMotion() ? 0.01 : 0.6,
            delay: prefersReducedMotion() ? 0 : delay,
            ease: easings.premium,
        },
    },
});

export const slideInLeft = (delay = 0, distance = 50): Variants => ({
    hidden: {
        opacity: 0,
        x: prefersReducedMotion() ? 0 : -distance,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: prefersReducedMotion() ? 0.01 : 0.6,
            delay: prefersReducedMotion() ? 0 : delay,
            ease: easings.premium,
        },
    },
});

export const slideInRight = (delay = 0, distance = 50): Variants => ({
    hidden: {
        opacity: 0,
        x: prefersReducedMotion() ? 0 : distance,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: prefersReducedMotion() ? 0.01 : 0.6,
            delay: prefersReducedMotion() ? 0 : delay,
            ease: easings.premium,
        },
    },
});

export const scaleIn = (delay = 0, initialScale = 0.8): Variants => ({
    hidden: {
        opacity: 0,
        scale: prefersReducedMotion() ? 1 : initialScale,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: prefersReducedMotion() ? 0.01 : 0.6,
            delay: prefersReducedMotion() ? 0 : delay,
            ease: easings.premium,
        },
    },
});

// ============================================
// STAGGER CONTAINER
// ============================================

export const staggerContainer = (staggerDelay = 0.1): Variants => ({
    hidden: { opacity: prefersReducedMotion() ? 1 : 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: prefersReducedMotion() ? 0 : staggerDelay,
            delayChildren: prefersReducedMotion() ? 0 : 0.2,
        },
    },
});

export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: prefersReducedMotion() ? 0 : 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: prefersReducedMotion() ? 0.01 : 0.4,
            ease: easings.premium,
        },
    },
};

// ============================================
// 3D EFFECTS (Mobile-safe)
// ============================================

// Gentle tilt on tap/hover - mobile-safe
export const tilt3D = {
    initial: {
        rotateX: 0,
        rotateY: 0,
    },
    tap: {
        rotateX: prefersReducedMotion() ? 0 : 5,
        rotateY: prefersReducedMotion() ? 0 : 5,
        transition: springs.gentle,
    },
};

// Card lift effect
export const lift = {
    initial: {
        y: 0,
        scale: 1,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    },
    hover: {
        y: prefersReducedMotion() ? 0 : -8,
        scale: prefersReducedMotion() ? 1 : 1.02,
        boxShadow: prefersReducedMotion()
            ? "0 4px 6px -1px rgb(0 0 0 / 0.1)"
            : "0 20px 25px -5px rgb(0 0 0 / 0.2)",
        transition: springs.smooth,
    },
    tap: {
        y: prefersReducedMotion() ? 0 : -4,
        scale: prefersReducedMotion() ? 1 : 0.98,
        transition: springs.snappy,
    },
};

// Glow effect on interaction
export const glow = {
    initial: {
        filter: "brightness(1) drop-shadow(0 0 0px rgba(255, 107, 107, 0))",
    },
    hover: {
        filter: prefersReducedMotion()
            ? "brightness(1) drop-shadow(0 0 0px rgba(255, 107, 107, 0))"
            : "brightness(1.1) drop-shadow(0 0 20px rgba(255, 107, 107, 0.4))",
        transition: { duration: 0.3 },
    },
    tap: {
        filter: prefersReducedMotion()
            ? "brightness(1) drop-shadow(0 0 0px rgba(255, 107, 107, 0))"
            : "brightness(1.2) drop-shadow(0 0 30px rgba(255, 107, 107, 0.6))",
        transition: { duration: 0.1 },
    },
};

// ============================================
// PARALLAX HELPERS (Constrained movement)
// ============================================

export const createParallaxVariants = (
    scrollY: number,
    offset: number,
    speed: number = 0.5
): { y: number } => {
    if (prefersReducedMotion()) return { y: 0 };

    // Constrain parallax movement to max 10px
    const maxMovement = 10;
    const movement = Math.max(
        -maxMovement,
        Math.min(maxMovement, (scrollY - offset) * speed)
    );

    return { y: movement };
};

// For scroll-based parallax - returns transform value
export const getParallaxTransform = (
    scrollProgress: number,
    maxDistance: number = 10
): string => {
    if (prefersReducedMotion()) return "translateY(0)";

    const distance = Math.max(
        -maxDistance,
        Math.min(maxDistance, scrollProgress * maxDistance)
    );
    return `translateY(${distance}px)`;
};

// ============================================
// VIEWPORT ANIMATION CONFIGS
// ============================================

export const viewportConfig = {
    once: true, // Animate only once when scrolling into view
    margin: "0px 0px -100px 0px", // Start animation slightly before element is in view
    amount: 0.3, // Trigger when 30% of element is visible
};

export const viewportConfigRepeating = {
    once: false,
    margin: "0px 0px -50px 0px",
    amount: 0.5,
};

// ============================================
// BUTTON INTERACTIONS
// ============================================

export const buttonTap = {
    scale: prefersReducedMotion() ? 1 : 0.95,
    transition: { duration: 0.1 },
};

export const buttonHover = {
    scale: prefersReducedMotion() ? 1 : 1.05,
    transition: springs.gentle,
};

// ============================================
// FLOATING ANIMATION (For hero section)
// ============================================

export const floating = {
    animate: {
        y: prefersReducedMotion() ? 0 : [0, -10, 0],
        x: prefersReducedMotion() ? 0 : [0, 5, 0],
        rotate: prefersReducedMotion() ? 0 : [0, 2, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Helper to create a delayed transition
export const delayedTransition = (delay: number): Transition => ({
    duration: prefersReducedMotion() ? 0.01 : 0.6,
    delay: prefersReducedMotion() ? 0 : delay,
    ease: easings.premium,
});

// Helper to create a spring transition with delay
export const delayedSpring = (delay: number = 0, springType: keyof typeof springs = "smooth"): Transition => ({
    ...(prefersReducedMotion() ? { duration: 0.01 } : springs[springType]),
    delay: prefersReducedMotion() ? 0 : delay,
});
