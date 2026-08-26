    import OrbitImages from "./OrbitImages";

    const images = [
        "/icons/icons-html.png",
        "/icons/icons-css.png",
        "/icons/icons-js.png",
        "/icons/icons-react.png",
        "/icons/icons-nextjs.png",
        "/icons/icons-postgresql.png",
        "/icons/icons-git.png",
        "/icons/icons-nodejs.png",
        "/icons/icons-github.png",
        "/icons/icons-figma.png"
    ]

    const OrbitImagesUsage = () => {
        return (
            <OrbitImages
                images={images}
                shape="ellipse"
                radiusX={580}
                radiusY={130}
                rotation={-9}
                duration={90}
                itemSize={72}
                responsive={true}
                radius={160}
                direction="normal"
                fill
                showPath
                paused={false}
            />
        )        
    }

    export default OrbitImagesUsage;
