import css from "./Title.module.css"

interface TitpleProps {
    text: string;
}

export default function Title({ text }: TitpleProps) {
    return <h2 className={css.title}>{text}</h2>
}
