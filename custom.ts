// By Ros
//変数を2進数でLEDに表示するスクリプト

/**
 * Custom blocks
 */
//% weight=1 color=#7f7f7f icon="\uf042"
namespace LedPlugin {

    //1列
    /**
     * 説明: 5bitの数値を5列で表示する。
     * @param num 表示したい数値, Max 31
     * @param col 表示を開始する列, col:0
     */
    //% block="1列に2進数で %num の値を %col の列から表示する"
    export function DisplayBit5(num: number, col: number) {

        let hoge = num
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col) }
        //どんどん厳選
        if (16 <= hoge) { led.plot(4, col); hoge -= 16 }
        if (8 <= hoge) { led.plot(3, col); hoge -= 8 }
        if (4 <= hoge) { led.plot(2, col); hoge -= 4 }
        if (2 <= hoge) { led.plot(1, col); hoge -= 2 }
        if (1 <= hoge) { led.plot(0, col); hoge -= 1 }
    }

    //2列
    /**
     * 説明: 10bitの数値を2列で表示する。
     * @param num 表示したい数値, Max 1023
     * @param col 表示を開始する列, col:0
     */
    //% block="2列に2進数で %num の値を %col の列から表示する"
    export function DisplayBit10(num: number, col: number) {
        let hoge = num
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); }
        //どんどん厳選
        //2列
        if (512 <= hoge) { led.plot(4, col + 1); hoge -= 512 }
        if (256 <= hoge) { led.plot(3, col + 1); hoge -= 256 }
        if (128 <= hoge) { led.plot(2, col + 1); hoge -= 128 }
        if (64 <= hoge) { led.plot(1, col + 1); hoge -= 64 }
        if (32 <= hoge) { led.plot(0, col + 1); hoge -= 32 }
        //1列
        if (16 <= hoge) { led.plot(4, col); hoge -= 16 }
        if (8 <= hoge) { led.plot(3, col); hoge -= 8 }
        if (4 <= hoge) { led.plot(2, col); hoge -= 4 }
        if (2 <= hoge) { led.plot(1, col); hoge -= 2 }
        if (1 <= hoge) { led.plot(0, col); hoge -= 1 }
    }

    //3列
    /**
     * 説明: 15bitの数値を3列で表示する。
     * @param num 表示したい数値, Max 32767
     * @param col 表示を開始する列, col:0
     */
    //% block="3列に2進数で %num の値を %col の列から表示する"
    export function DisplayBit15(num: number, col: number) {
        let hoge = num
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); led.unplot(i, col + 2); }
        //どんどん厳選
        //3列
        if (16384 <= hoge) { led.plot(4, col + 2); hoge -= 16384 }
        if (8192 <= hoge) { led.plot(3, col + 2); hoge -= 8192 }
        if (4096 <= hoge) { led.plot(2, col + 2); hoge -= 4096 }
        if (2048 <= hoge) { led.plot(1, col + 2); hoge -= 2048 }
        if (1024 <= hoge) { led.plot(0, col + 2); hoge -= 1024 }
        //2列
        if (512 <= hoge) { led.plot(4, col + 1); hoge -= 512 }
        if (256 <= hoge) { led.plot(3, col + 1); hoge -= 256 }
        if (128 <= hoge) { led.plot(2, col + 1); hoge -= 128 }
        if (64 <= hoge) { led.plot(1, col + 1); hoge -= 64 }
        if (32 <= hoge) { led.plot(0, col + 1); hoge -= 32 }
        //1列
        if (16 <= hoge) { led.plot(4, col); hoge -= 16 }
        if (8 <= hoge) { led.plot(3, col); hoge -= 8 }
        if (4 <= hoge) { led.plot(2, col); hoge -= 4 }
        if (2 <= hoge) { led.plot(1, col); hoge -= 2 }
        if (1 <= hoge) { led.plot(0, col); hoge -= 1 }
    }

    //4列
    /**
     * 説明: 20bitの数値を4列で表示する。
     * @param num 表示したい数値, Max 1048575
     * @param col 表示を開始する列, col:0
     */
    //% block="4列に2進数で %num の値を %col の列から表示する"
    export function DisplayBit20(num: number, col: number) {
        let hoge = num
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); led.unplot(i, col + 2); led.unplot(i, col + 3); }
        //どんどん厳選
        //4列
        if (524288 <= hoge) { led.plot(4, col + 3); hoge -= 524288 }
        if (262144 <= hoge) { led.plot(3, col + 3); hoge -= 262144 }
        if (131072 <= hoge) { led.plot(2, col + 3); hoge -= 131072 }
        if (65536 <= hoge) { led.plot(1, col + 3); hoge -= 65536 }
        if (32768 <= hoge) { led.plot(0, col + 3); hoge -= 32768 }
        //3列
        if (16384 <= hoge) { led.plot(4, col + 2); hoge -= 16384 }
        if (8192 <= hoge) { led.plot(3, col + 2); hoge -= 8192 }
        if (4096 <= hoge) { led.plot(2, col + 2); hoge -= 4096 }
        if (2048 <= hoge) { led.plot(1, col + 2); hoge -= 2048 }
        if (1024 <= hoge) { led.plot(0, col + 2); hoge -= 1024 }
        //2列
        if (512 <= hoge) { led.plot(4, col + 1); hoge -= 512 }
        if (256 <= hoge) { led.plot(3, col + 1); hoge -= 256 }
        if (128 <= hoge) { led.plot(2, col + 1); hoge -= 128 }
        if (64 <= hoge) { led.plot(1, col + 1); hoge -= 64 }
        if (32 <= hoge) { led.plot(0, col + 1); hoge -= 32 }
        //1列
        if (16 <= hoge) { led.plot(4, col); hoge -= 16 }
        if (8 <= hoge) { led.plot(3, col); hoge -= 8 }
        if (4 <= hoge) { led.plot(2, col); hoge -= 4 }
        if (2 <= hoge) { led.plot(1, col); hoge -= 2 }
        if (1 <= hoge) { led.plot(0, col); hoge -= 1 }
    }

    //5列
    /**
     * 説明: 25bitの数値を1列で表示する。
     * @param num 表示したい数値, Max 33554431
     * @param col 表示を開始する列, col:0
     */
    //% block="5列に2進数で %num の値を %col の列から表示する"
    export function DisplayBit25(num: number, col: number) {
        let hoge = num
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); led.unplot(i, col + 2); led.unplot(i, col + 3); led.unplot(i, col + 4); }
        //どんどん厳選
        //5列
        if (16777216 <= hoge) { led.plot(4, col + 4); hoge -= 16777216 }
        if (8388608 <= hoge) { led.plot(3, col + 4); hoge -= 8388608 }
        if (4194304 <= hoge) { led.plot(2, col + 4); hoge -= 4194304 }
        if (2097152 <= hoge) { led.plot(1, col + 4); hoge -= 2097152 }
        if (1048576 <= hoge) { led.plot(0, col + 4); hoge -= 1048576 }
        //4列
        if (524288 <= hoge) { led.plot(4, col + 3); hoge -= 524288 }
        if (262144 <= hoge) { led.plot(3, col + 3); hoge -= 262144 }
        if (131072 <= hoge) { led.plot(2, col + 3); hoge -= 131072 }
        if (65536 <= hoge) { led.plot(1, col + 3); hoge -= 65536 }
        if (32768 <= hoge) { led.plot(0, col + 3); hoge -= 32768 }
        //3列
        if (16384 <= hoge) { led.plot(4, col + 2); hoge -= 16384 }
        if (8192 <= hoge) { led.plot(3, col + 2); hoge -= 8192 }
        if (4096 <= hoge) { led.plot(2, col + 2); hoge -= 4096 }
        if (2048 <= hoge) { led.plot(1, col + 2); hoge -= 2048 }
        if (1024 <= hoge) { led.plot(0, col + 2); hoge -= 1024 }
        //2列
        if (512 <= hoge) { led.plot(4, col + 1); hoge -= 512 }
        if (256 <= hoge) { led.plot(3, col + 1); hoge -= 256 }
        if (128 <= hoge) { led.plot(2, col + 1); hoge -= 128 }
        if (64 <= hoge) { led.plot(1, col + 1); hoge -= 64 }
        if (32 <= hoge) { led.plot(0, col + 1); hoge -= 32 }
        //1列
        if (16 <= hoge) { led.plot(4, col); hoge -= 16 }
        if (8 <= hoge) { led.plot(3, col); hoge -= 8 }
        if (4 <= hoge) { led.plot(2, col); hoge -= 4 }
        if (2 <= hoge) { led.plot(1, col); hoge -= 2 }
        if (1 <= hoge) { led.plot(0, col); hoge -= 1 }
    }
}