import GreenWay from "../../core/Greenway"

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot() {
        const $root = GreenWay.create('div', 'excel')
        
        this.components.forEach(Component => {
            const $el = GreenWay.create('div', Component.className)
            const component = new Component($el)
            $el.innerHTML = component.toHtml()
            $root.append($el)
        })

        return $root
    }
    render() {
        this.$el.append(this.getRoot())
    }
}