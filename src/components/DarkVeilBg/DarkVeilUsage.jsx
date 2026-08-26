import DarkVeil from "./DarkVeilBg";

const DarkVeilBg = () => {
    return (
        <div className="darkveil_bg" /*style={{ width: '100%', height: '600px', position: 'relative' }}*/>
            <DarkVeil
                hueShift={0}
                noiseIntensity={0}
                scanlineIntensity={0}
                speed={0.6}
                scanlineFrequency={0}
                warpAmount={0.6}
            />
        </div>
    )
}

export default DarkVeilBg;