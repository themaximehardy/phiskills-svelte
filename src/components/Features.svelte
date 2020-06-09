<script>
    import {getContext} from "svelte"

    const data = getContext("data")

    const {features} = data
</script>

<section class="py-8 px-4">
    <div class="flex flex-wrap -mx-3">
        {#each features.content as item}
            <div class="md:w-1/4 px-3 mb-6 md:mb-0 text-center">
                <h3 class="text-xl mb-1 md:mb-3 font-heading">{item.title}</h3>
                <p class="text-gray-500 leading-relaxed">{item.text}</p>
            </div>
        {/each}
    </div>
</section>