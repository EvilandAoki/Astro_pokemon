import type { JSX } from 'solid-js';

export default function TechBadge(props: { tech: string }): JSX.Element {
    return (
        <span class="bg-primary text-white px-4 py-2 rounded-full text-sm md:text-base">
            {props.tech}
        </span>
    );
}