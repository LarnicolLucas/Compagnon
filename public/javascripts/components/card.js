const card = {
    template:`
    <section class="row center-align" :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}">
        <figure class="col s10 offset-s1">
            <img class="responsive-img circle" alt="avatar agent" :src="props.agent.chemin_avatar"/>
        </figure>
        <figcaption class="col s12">
            <h5><strong><b>{{props.agent.nom}}</b></strong> {{props.agent.prenom}}</h5>
        </figcaption>
        <div class="divider"></div>
        <div class="col s12">
            <h6> {{props.agent.cursus_actuel}} </h6>
        </div>
        <section class="col s12">
            <div class="row">
                <div class="mini_badge col s12 m4 glass ">
                    {{props.agent.IMD}} IMD
                </div>
                <div class="mini_badge col s12 m4 glass">
                    {{props.agent.PST}} PST
                </div>
                <div class="mini_badge col s12 m4 glass">
                    {{props.agent.VPS}} VPS
                </div>
            </div>
        </section>
    </section>
    `,
    props:["props"]
}

export default card