
export default function GreenWay() {

}

GreenWay.create = (tagName = 'div', className = '') => {
    const el = document.createElement(tagName)
    if (className) el.classList.add(className)
    return el
}   