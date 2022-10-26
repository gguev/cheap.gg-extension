import PriceCard from 'src/components/PriceCard.svelte'
import '../../tailwind.css'

const root = document.createElement('div')
const anchor = document.querySelector('.game_area_purchase_game_wrapper')
anchor.insertAdjacentElement('beforebegin', root)   

const priceCard = new PriceCard({
    target: root
})

export default priceCard

