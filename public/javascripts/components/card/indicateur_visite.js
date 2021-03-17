const description_card = {
    template:`
        <div class="col m4">
            <div class="row">
                <div class="col s10 offset-1"> {{props.label}} </div>
                <div 
                    class="col s10 offset-1 glass" 
                    style="border-radius: 3px;">
                        {{props.value}}
                    </div>
            </div>
        </div>
    `,
    props: ["props"]
}

export default description_card