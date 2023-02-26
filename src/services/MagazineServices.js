import Magazine from '../models/Magazine.js';
import CSVReader from '../utils/CSVReader.js';

class MagazineService {
  static async getMagazines() {
    const data = await CSVReader.read('data/magazines.csv');
    const magazines = data.map((magazine) => new Magazine(magazine));
    return magazines;
  }

  static async addMagazine(magazine) {
    const data = await CSVReader.read('data/magazines.csv');
    data.push(magazine.toData());
    await CSVReader.write('data/magazines.csv', data);
  }

  static async searchMagazines(searchText) {
    const data = await CSVReader.read('data/magazines.csv');
    const magazines = data.map((magazine) => new Magazine(magazine));
    const filteredMagazines = magazines.filter((magazine) => magazine.title.includes(searchText) || magazine.author.includes(searchText));
    return filteredMagazines;
  }

  static async deleteMagazine(id) {
    const data = await CSVReader.read('data/magazines.csv');
    const filteredData = data.filter((magazine) => magazine.id !== id);
    await CSVReader.write('data/magazines.csv', filteredData);
  }
}

export default MagazineService;
