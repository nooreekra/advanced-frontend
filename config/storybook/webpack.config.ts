import path from "path";
import { BuildPaths } from "../build/types/config";
import webpack from "webpack";
import { buildCSSLoader } from "../build/loaders/buildCSSLoader";

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules.push(buildCSSLoader(true))

    return config
}