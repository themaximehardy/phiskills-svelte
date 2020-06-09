<script>
    import {getContext} from "svelte"

    const data = getContext("data")

    export let title
    export let subtitle
</script>
<!--TODO: think if necessary to have an optional tagline in title-->
<!--<span class="text-sm font-semibold">TAGLINE</span>-->
<div class="w-full flex flex-col items-center">
    <h2 class="text-6xl mb-6 text-center leading-tight font-heading capitalize">{title}</h2>
    {#if subtitle}
        <p class="max-w-xl mb-8 text-gray-500">{subtitle}</p>
    {/if}
</div>
