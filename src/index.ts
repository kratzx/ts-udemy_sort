import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharacterCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection);

const characterCollection = new CharactersCollection('Xaayb');
characterCollection.sort();
console.log(characterCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();

linkedList.print();