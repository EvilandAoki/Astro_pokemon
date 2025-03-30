import type { JSX } from 'solid-js';

interface ServiceCardProps {
    title: string;
    icon: string;
    description: string;
}

export default function ServiceCard(props: ServiceCardProps): JSX.Element {
    return (
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div class={`text-primary text-4xl mb-4 i-${props.icon}`} />
            <h3 class="text-xl font-bold mb-3">{props.title}</h3>
            <p class="text-gray-600">{props.description}</p>
        </div>
    );
}