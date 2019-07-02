interface RafMap {
    [id: number]: number;
}
export default function wrapperRaf(callback: () => void, delayFrames?: number): number;
export default namespace wrapperRaf {
    var cancel: (pid?: number | undefined) => void;
    var ids: RafMap;
}
export {};
