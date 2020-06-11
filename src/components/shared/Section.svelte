<script>
    import {fade} from "svelte/transition"
    export let className
    let visible = true
</script>

<section class={className} in:fade>
    <slot></slot>
</section>