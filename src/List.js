import { TransitionGroup, CSSTransition } from 'react-transition-group'

const List = ({ items, onRemove }) => (
	<TransitionGroup component="ul">
		{
			items.map(item => (
				<CSSTransition
					key={ item.id }
					classNames="os"
					timeout={ 750 }
				>
					<li
						onClick={ () => onRemove(item.id) }
					>{ item.title }</li>
				</CSSTransition>
			))
		}
	</TransitionGroup>
)

export default List
