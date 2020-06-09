<script>
    import {getContext} from "svelte"

    import Title from "./shared/Title.svelte"

    const data = getContext("data")
</script>

<section class="pt-8 px-4 pb-4">
    <Title title="team" subtitle="dadsadasdasdasdasdasdasd"/>
    <div class="flex flex-wrap -mx-4 text-center">
        <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow-md"><img class="mx-auto mb-4"
                                                            src="placeholders/pictures/female_avatar.svg"
                                                            alt="">
                <div class="px-8">
                    <h3 class="text-xl font-heading font-semibold">Maxime
                        Hardy</h3><span>Regional Manager at Utica branch</span>
                    <div class="flex justify-center py-3 my-4 mx-12 border-t border-b">
                        <img class="w-8 h-8 mx-3"
                             src="placeholders/icons/message.svg" alt=""><img
                            class="w-8 h-8 mx-3"
                            src="placeholders/icons/share.svg" alt=""><img
                            class="w-8 h-8 mx-3"
                            src="placeholders/icons/star.svg" alt=""></div>
                    <p>Started as a Sales representative at Stamford branch,
                        moved to Scranton.</p>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow-md"><img class="mx-auto mb-4"
                                                            src="placeholders/pictures/male_avatar.svg"
                                                            alt="">
                <div class="px-8">
                    <h3 class="text-xl font-heading font-semibold">Victor
                        Nitu</h3><span>Marketing Director</span>
                    <div class="flex justify-center py-3 my-4 mx-12 border-t border-b">
                        <img class="w-8 h-8 mx-3"
                             src="placeholders/icons/message.svg" alt=""><img
                            class="w-8 h-8 mx-3"
                            src="placeholders/icons/share.svg" alt=""><img
                            class="w-8 h-8 mx-3"
                            src="placeholders/icons/star.svg" alt=""></div>
                    <p>I started there as an Assistant and finally got a
                        promotion to the Marketing Director.</p>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/3 px-4 mb-8">
            <div class="h-full pb-6 rounded shadow-md"><img class="mx-auto mb-4"
                                                            src="placeholders/pictures/female_avatar.svg"
                                                            alt="">
                <div class="px-8">
                    <h3 class="text-xl font-heading font-semibold">Michele
                        Rexha</h3><span>ML Engineer</span>
                    <div class="flex justify-center py-3 my-4 mx-12 border-t border-b">
                        <img class="w-8 h-8 mx-3"
                             src="placeholders/icons/message.svg" alt=""><img
                            class="w-8 h-8 mx-3"
                            src="placeholders/icons/share.svg" alt=""><img
                            class="w-8 h-8 mx-3"
                            src="placeholders/icons/star.svg" alt=""></div>
                    <p>I work for Dunder Mifflin for a few years now. I learned
                        a lot.</p>
                </div>
            </div>
        </div>
    </div>
</section>