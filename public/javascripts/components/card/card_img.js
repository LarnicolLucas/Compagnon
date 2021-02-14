const card_img = {
    template:`
        <section>

            <!-- <figure class="col s12" style="position: absolute; top: -10%; left: 0; z-index: -1; ">
                <img :src="chemin_fond_avatar[props.model.agent.id_etape_cursus_PST]" class="responsive-img" alt="Image de fond"/>
            </figure> -->

            <figure class="col s4 l8 offset-s4 offset-l2">
                <img class="responsive-img circle" alt="avatar agent" :src="props.model.agent.chemin_avatar"/>
            </figure>
            <figcaption 
                class="col s4 l8 offset-s4 offset-l2 borderRadius" 
                :style="{background: props.color_contrast}"
                style="margin-bottom: 20px; margin-top: 20px;"
            >
                <h6><strong>{{props.model.agent.nom}} {{props.model.agent.prenom}}</strong></h6>
            </figcaption>
        </section>
    `,
    props: ["props"]
}

export default card_img