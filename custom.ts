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
    //% inlineInputMode=inline
    export function DisplayBit5(num: number, col: number) {
        
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col) }
        //どんどん厳選
        if (16 <= num) { led.plot(4, col); num -= 16 }
        if (8 <= num) { led.plot(3, col); num -= 8 }
        if (4 <= num) { led.plot(2, col); num -= 4 }
        if (2 <= num) { led.plot(1, col); num -= 2 }
        if (1 <= num) { led.plot(0, col); num -= 1 }
    }

    //2列
    /**
     * 説明: 10bitの数値を2列で表示する。
     * @param num 表示したい数値, Max 1023
     * @param col 表示を開始する列, col:0
     */
    //% block="2列に2進数で %num の値を %col の列から表示する"
    //% inlineInputMode=inline
    export function DisplayBit10(num: number, col: number) {
        
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); }
        //どんどん厳選
        //2列
        if (512 <= num) { led.plot(4, col + 1); num -= 512 }
        if (256 <= num) { led.plot(3, col + 1); num -= 256 }
        if (128 <= num) { led.plot(2, col + 1); num -= 128 }
        if (64 <= num) { led.plot(1, col + 1); num -= 64 }
        if (32 <= num) { led.plot(0, col + 1); num -= 32 }
        //1列
        if (16 <= num) { led.plot(4, col); num -= 16 }
        if (8 <= num) { led.plot(3, col); num -= 8 }
        if (4 <= num) { led.plot(2, col); num -= 4 }
        if (2 <= num) { led.plot(1, col); num -= 2 }
        if (1 <= num) { led.plot(0, col); num -= 1 }
    }

    //3列
    /**
     * 説明: 15bitの数値を3列で表示する。
     * @param num 表示したい数値, Max 32767
     * @param col 表示を開始する列, col:0
     */
    //% block="3列に2進数で %num の値を %col の列から表示する"
    //% inlineInputMode=inline
    export function DisplayBit15(num: number, col: number) {
        
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); led.unplot(i, col + 2); }
        //どんどん厳選
        //3列
        if (16384 <= num) { led.plot(4, col + 2); num -= 16384 }
        if (8192 <= num) { led.plot(3, col + 2); num -= 8192 }
        if (4096 <= num) { led.plot(2, col + 2); num -= 4096 }
        if (2048 <= num) { led.plot(1, col + 2); num -= 2048 }
        if (1024 <= num) { led.plot(0, col + 2); num -= 1024 }
        //2列
        if (512 <= num) { led.plot(4, col + 1); num -= 512 }
        if (256 <= num) { led.plot(3, col + 1); num -= 256 }
        if (128 <= num) { led.plot(2, col + 1); num -= 128 }
        if (64 <= num) { led.plot(1, col + 1); num -= 64 }
        if (32 <= num) { led.plot(0, col + 1); num -= 32 }
        //1列
        if (16 <= num) { led.plot(4, col); num -= 16 }
        if (8 <= num) { led.plot(3, col); num -= 8 }
        if (4 <= num) { led.plot(2, col); num -= 4 }
        if (2 <= num) { led.plot(1, col); num -= 2 }
        if (1 <= num) { led.plot(0, col); num -= 1 }
    }

    //4列
    /**
     * 説明: 20bitの数値を4列で表示する。
     * @param num 表示したい数値, Max 1048575
     * @param col 表示を開始する列, col:0
     */
    //% block="4列に2進数で %num の値を %col の列から表示する"
    //% inlineInputMode=inline
    export function DisplayBit20(num: number, col: number) {
        
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); led.unplot(i, col + 2); led.unplot(i, col + 3); }
        //どんどん厳選
        //4列
        if (524288 <= num) { led.plot(4, col + 3); num -= 524288 }
        if (262144 <= num) { led.plot(3, col + 3); num -= 262144 }
        if (131072 <= num) { led.plot(2, col + 3); num -= 131072 }
        if (65536 <= num) { led.plot(1, col + 3); num -= 65536 }
        if (32768 <= num) { led.plot(0, col + 3); num -= 32768 }
        //3列
        if (16384 <= num) { led.plot(4, col + 2); num -= 16384 }
        if (8192 <= num) { led.plot(3, col + 2); num -= 8192 }
        if (4096 <= num) { led.plot(2, col + 2); num -= 4096 }
        if (2048 <= num) { led.plot(1, col + 2); num -= 2048 }
        if (1024 <= num) { led.plot(0, col + 2); num -= 1024 }
        //2列
        if (512 <= num) { led.plot(4, col + 1); num -= 512 }
        if (256 <= num) { led.plot(3, col + 1); num -= 256 }
        if (128 <= num) { led.plot(2, col + 1); num -= 128 }
        if (64 <= num) { led.plot(1, col + 1); num -= 64 }
        if (32 <= num) { led.plot(0, col + 1); num -= 32 }
        //1列
        if (16 <= num) { led.plot(4, col); num -= 16 }
        if (8 <= num) { led.plot(3, col); num -= 8 }
        if (4 <= num) { led.plot(2, col); num -= 4 }
        if (2 <= num) { led.plot(1, col); num -= 2 }
        if (1 <= num) { led.plot(0, col); num -= 1 }
    }

    //5列
    /**
     * 説明: 25bitの数値を1列で表示する。
     * @param num 表示したい数値, Max 33554431
     * @param col 表示を開始する列, col:0
     */
    //% block="5列に2進数で %num の値を %col の列から表示する"
    //% inlineInputMode=inline
    export function DisplayBit25(num: number, col: number) {
        
        //一旦Ledの消去
        for (let i = 0; i < 5; i++) { led.unplot(i, col); led.unplot(i, col + 1); led.unplot(i, col + 2); led.unplot(i, col + 3); led.unplot(i, col + 4); }
        //どんどん厳選
        //5列
        if (16777216 <= num) { led.plot(4, col + 4); num -= 16777216 }
        if (8388608 <= num) { led.plot(3, col + 4); num -= 8388608 }
        if (4194304 <= num) { led.plot(2, col + 4); num -= 4194304 }
        if (2097152 <= num) { led.plot(1, col + 4); num -= 2097152 }
        if (1048576 <= num) { led.plot(0, col + 4); num -= 1048576 }
        //4列
        if (524288 <= num) { led.plot(4, col + 3); num -= 524288 }
        if (262144 <= num) { led.plot(3, col + 3); num -= 262144 }
        if (131072 <= num) { led.plot(2, col + 3); num -= 131072 }
        if (65536 <= num) { led.plot(1, col + 3); num -= 65536 }
        if (32768 <= num) { led.plot(0, col + 3); num -= 32768 }
        //3列
        if (16384 <= num) { led.plot(4, col + 2); num -= 16384 }
        if (8192 <= num) { led.plot(3, col + 2); num -= 8192 }
        if (4096 <= num) { led.plot(2, col + 2); num -= 4096 }
        if (2048 <= num) { led.plot(1, col + 2); num -= 2048 }
        if (1024 <= num) { led.plot(0, col + 2); num -= 1024 }
        //2列
        if (512 <= num) { led.plot(4, col + 1); num -= 512 }
        if (256 <= num) { led.plot(3, col + 1); num -= 256 }
        if (128 <= num) { led.plot(2, col + 1); num -= 128 }
        if (64 <= num) { led.plot(1, col + 1); num -= 64 }
        if (32 <= num) { led.plot(0, col + 1); num -= 32 }
        //1列
        if (16 <= num) { led.plot(4, col); num -= 16 }
        if (8 <= num) { led.plot(3, col); num -= 8 }
        if (4 <= num) { led.plot(2, col); num -= 4 }
        if (2 <= num) { led.plot(1, col); num -= 2 }
        if (1 <= num) { led.plot(0, col); num -= 1 }
    }
}