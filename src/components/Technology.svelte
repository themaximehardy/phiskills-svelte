<script>
    import {getContext} from "svelte"

    const data = getContext("data")
</script>

<section class="py-12 px-4 text-center">
    <Title title="technologies"/>
    <p class="max-w-xl mx-auto mb-12 text-gray-500">Because no great company
        could exist without accountants, sellers, stock workers, and of course -
        paper.</p>
    <div class="flex flex-wrap -mx-4">
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">JavaScript</h3><span>Regional Manager</span>
        </div>
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/female_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Python</h3><span>Regional Manager</span>
        </div>
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Golang</h3><span>Assistant to the Regional Manager</span>
        </div>
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Swift</h3><span>Salesman</span>
        </div>
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/female_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Scala</h3><span>Salesman</span>
        </div>
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Rust</h3><span>HR Manager</span>
        </div>
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/male_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">PostgreSQL</h3><span>Marketing Director</span>
        </div>
        <div class="p-4 w-1/2 lg:w-1/4"><img
                class="mx-auto mb-4 rounded-full w-1/3"
                src="placeholders/pictures/female_avatar.svg" alt="">
            <h3 class="text-xl font-heading font-semibold">Neo4j</h3><span>Customer Service</span>
        </div>
    </div>
</section>