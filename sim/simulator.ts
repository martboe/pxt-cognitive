/// <reference path="../node_modules/pxt-core/typings/globals/bluebird/index.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board() : Board {
        return runtime.board as Board;
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public element: HTMLDivElement;
        
        constructor() {
            super();
            this.element = <HTMLDivElement><any>document.getElementById('sim');
        }
        
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            document.body.innerHTML = ''; // clear children
            document.body.appendChild(this.element);

            return Promise.resolve();
        }       
        
    }
}