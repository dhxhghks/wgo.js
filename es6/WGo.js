// WGo module

import Game from "./Game";
import Position from "./Game/Position";
import SGFParser, {SGFSyntaxError} from "./kifu/SGFParser";
import KNode from "./kifu/KNode";
import CanvasBoard from "./CanvasBoard";
import Kifu from "./kifu/Kifu";

/*WGo.Game = Game;
WGo.Position = Position;
WGo.SGFParser = SGFParser;
WGo.KNode = KNode;*/
//WGo.CanvasBoard = CanvasBoard;

SGFParser.SGFSyntaxError = SGFSyntaxError;

export * from "./core";
export {Game, Position, SGFParser, KNode, CanvasBoard, Kifu};
