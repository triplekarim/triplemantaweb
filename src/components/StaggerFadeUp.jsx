import { useEffect, useRef } from 'react';

export default function StaggerFadeUp({
    children,
    className = '',
    startDelay = 0,
    stepDelay = 0.1,
}) {
    const ref = useRef(null);

    useEffect(() => {
        const parent = ref.current;
        if (!parent) return;

        [...parent.children].forEach((child, index) => {
            child.style.animationDelay = `${startDelay + index * stepDelay}s`;
        });
    }, [children, startDelay, stepDelay]);

    return (
        <div ref={ref} className={`stagger-fade-up ${className}`}>
            {children}
        </div>
    );
}