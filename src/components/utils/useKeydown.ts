import { onBeforeMount, onBeforeUnmount } from 'vue';

export default function useKeydown(callback: (e: KeyboardEvent) => void) {
    onBeforeMount(() => window.addEventListener('keydown', callback));
    onBeforeUnmount(() => window.removeEventListener('keydown', callback));
}
