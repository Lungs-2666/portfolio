    import MaskedHeading from "./MaskedText";

    const MaskedText = () => {
        return (
            <MaskedHeading
                text="CONTINUE"
                mediaType="image"
                src="/head_bg.jpg"
                poster="/"
                fillScale={1}
                parallax={18}
                reveal="fade"
                trigger="view"
                drift={18}
                brightness={1}
                saturation={1}
                grayscale={false}
                duration={2.3}
                stagger={0.26}
                align="center"
                weight={600}
                tracking={-0.02}
                lineHeight={1.01}
                textScale={.2}
            />
        )
    }

    export default MaskedText;
