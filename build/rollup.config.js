import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import postcss from 'rollup-plugin-postcss'

export default {
    input: './main.js', // Path relative to package.json
    external: [
        'vue'
    ],
    output: {
        file: 'dist/comiteo-components.umd.js',
        format: 'umd',
        name: 'ComiteoComponents',
        exports: 'named',
    },
    plugins: [
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        postcss({
            // extract: true,
            config: {
                path: './postcss.config.js',
            }
        }),
    ],
};