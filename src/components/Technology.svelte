<script>
    import {getContext} from "svelte"

    import {fade, fly} from "svelte/transition"
    import Title from "./shared/Title.svelte"

    const data = getContext("data")

    const {technology} = data
</script>

<section class="py-12 px-4 text-center" >
    <Title title="technologies"/>
    <p class="max-w-xl mx-auto mb-12 text-gray-500">{technology.information}</p>
    <div class="flex flex-wrap -mx-4">
        {#each technology.content as item}
            <div class="p-4 w-1/2 lg:w-1/4"><img
                    class="mx-auto mb-4 rounded-full w-1/3"
                    src={item.logo} alt="" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
                <h3 class="text-xl font-heading
            font-semibold">{item.name}</h3><span>Regional Manager</span>
            </div>
        {/each}
    </div>
</section>