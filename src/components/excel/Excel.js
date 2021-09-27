export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot() {
        const $root = document.createElement('div')

        this.components.forEach(Com => {
            const component = new Com()
            $root.insertAdjacentHTML('beforeend', component.toHtml())
        })
        console.log($root)
        return $root
    }
    render() {
        this.$el.append(this.getRoot())
    }
}