<script>
    import {getContext} from "svelte"
    import {getDate} from "../utils/date.js"

    import Section from "./shared/Section.svelte"
    import Title from "./shared/Title.svelte"

    const data = getContext("data")

    const fetchFeed = (async () => {
        const response = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https:%2F%2Fmedium.com%2Ffeed%2Fphi-skills"
        )
        const json = await response.json()
        console.log("json: ", json)
        return json
    })()
</script>

<Section className="pt-8 px-4 pb-4">
    <Title title="latest posts"/>
    <div class="flex flex-wrap -mx-4">
        {#await fetchFeed}
            <p>...loading</p>
        {:then json}
            {#each json.items.slice(0, 7) as item, index}
                {#if index === 1}
                    <div class="w-full lg:w-2/4 px-4 mb-8">
                        <div
                                class="hidden lg:block relative rounded shadow-md bg-cover h-full"
                                style="background-image: url('{item.thumbnail}')"
                        >
                            <a href="{item.link}" target="_blank">
                <span
                        class="absolute text-sm py-1 px-3 m-2 text-white font-semibold
                  bg-indigo-500 rounded-full"
                >
                  {getDate(item.pubDate)}
                </span>
                                <div class="p-6 flex items-end h-full text-white">
                                    <div>
                                        <h3 class="text-2xl mb-2 font-heading">{item.title}</h3>
                                        <p>{item.categories.join(' • ')}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="lg:hidden relative rounded shadow-md pb-6 h-full">
                            <a href="{item.link}" target="_blank">
                <span
                        class="absolute text-sm py-1 px-3 m-2 text-white font-semibold
                  bg-indigo-500 rounded-full"
                >
                  {getDate(item.pubDate)}
                </span>
                                <img class="mb-4 object-cover w-full h-48"
                                     src="{item.thumbnail}" alt=""/>
                                <div class="px-4">
                                    <h3 class="text-xl mb-3 font-heading">{item.title}</h3>
                                    <p class="text-gray-500">{item.categories.join(' • ')}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                {:else}
                    <div class="w-full lg:w-1/4 px-4 mb-8">
                        <div class="relative h-full pb-6 rounded shadow-md">
                            <a href="{item.link}" target="_blank">
                <span
                        class="absolute text-sm py-1 px-3 m-2 text-white font-semibold
                  bg-indigo-500 rounded-full"
                >
                  {getDate(item.pubDate)}
                </span>
                                <img class="mb-4 object-cover w-full h-48"
                                     src="{item.thumbnail}" alt=""/>
                                <div class="px-4">
                                    <h3 class="text-xl mb-3 font-heading">{item.title}</h3>
                                    <p class="text-gray-500">{item.categories.join(' • ')}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                {/if}
            {/each}
        {:catch error}
            <p>An error occurred!</p>
        {/await}
    </div>
</Section>
