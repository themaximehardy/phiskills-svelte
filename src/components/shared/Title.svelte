<script>
    import {getContext} from "svelte"

    const data = getContext("data")

    let title
</script>
<!--TODO: think if necessary to have an optional tagline in title-->
<!--<span class="text-sm font-semibold">TAGLINE</span>-->
<h2 class="text-5xl mb-4 text-center leading-tight font-heading
capitalize">{title}</h2>
