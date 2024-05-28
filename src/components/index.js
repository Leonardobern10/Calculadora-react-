import { ButtonContainer } from './styles'

const Button = ({label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick} type="button">
            {label}
        </ButtonContainer>
    );
}

export default Button;

/*
import {tag html já estilizada exportada como constante} from './caminho'

const button = ({texto do botao que será passado como parâmetro da função, 
    evento que sera recebido como parametro da função}) => {
        return (
            <Tag-html-importada onClick (atributo html para definição de eventos)={evento recebido como parametro} type="button">
            {texto fornecido como parametro}
            </tag-html-importada>
        )
    }


*/