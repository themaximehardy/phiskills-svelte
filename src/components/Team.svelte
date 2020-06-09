<script>
    import {getContext} from "svelte"

    import Title from "./shared/Title.svelte"

    const data = getContext("data")

    const {team} = data
</script>

<section class="pt-8 px-4 pb-4">
    <Title title={team.title} subtitle={team.subtitle}/>
    <div class="flex flex-wrap -mx-4 text-center">
        {#each team.content as person}
            <div class="w-full lg:w-1/3 px-4 mb-8">
                <div class="h-full pb-6 rounded shadow-md">
                    <img class="mx-auto mb-4" src={person.image} alt="">
                    <div class="px-8">
                        <h3 class="text-xl font-heading font-semibold">{person.fullname}
                        </h3><span>{person.role}</span>
                        <div class="flex justify-center py-3 my-4 mx-12 border-t border-b">
                            <img
                                    class="w-8 h-8 mx-3"
                                    src="placeholders/icons/message.svg"
                                    alt="">
                            <img
                                    class="w-8 h-8 mx-3"
                                    src="placeholders/icons/share.svg"
                                    alt="">
                            <img
                                    class="w-8 h-8 mx-3"
                                    src="placeholders/icons/star.svg"
                                    alt="">
                        </div>
                        <p>{person.description}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>