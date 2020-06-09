<script>
    import {getContext} from "svelte"

    import Title from "./shared/Title.svelte"

    const data = getContext("data")

    const {values} = data
</script>

<section class="py-16 px-4">
    <Title title="our values"/>
    <div class="flex flex-wrap max-w-5xl -mx-4 -mb-8 md:mx-auto">
        {#each values.content as item}
            <div class="w-full px-4 mb-8 md:w-1/2">
                <div class="h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow-md">
                    <h3 class="text-2xl mb-3">{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            </div>
        {/each}
    </div>
</section>