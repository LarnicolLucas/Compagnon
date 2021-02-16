const switch_button = {
    template: `
        <div class="switch">
            <label>
            {{props.off}}
            <input  @click="clicked" type="checkbox">
            <span class="lever"></span>
            {{props.on}}
            </label>
        </div>
    `,
    props:["props"],
    data: function(){
        return {
            state: false
        }
    },
    methods: {
        clicked: function(){
            this.state = !this.state;
            this.$emit("switchclicked", this.state);
        }
    }
}

export default switch_button