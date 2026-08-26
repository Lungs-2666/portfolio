    import RotatingText from "./rotatingText";
    import './rotatingText.css'

    const RotatingTextComponent = () => {
        return (
            <RotatingText
                texts={['Frontend developer', 'Web-designer', 'Software developer']}
                className='rotatingText'
                staggerFrom="random" //first, last, center
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName='splitLevel'
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={4200}
                splitBy="characters"
                auto
                loop
            />
        );
    }

    export default RotatingTextComponent;
