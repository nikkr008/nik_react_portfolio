// Main person/profile image
import person from './person.png';
import logo from './logo.png';
import about from './about.png';

// Icons
import codeIcon from './code-icon.png';
import designIcon from './design-icon.png';
import appIcon from './app-icon.png';

// Project Images - Main Images
import klyncAppMain from './projectImages/klyncApp/KlyncAppImg.png';
import moviesAppMain from './projectImages/moviesApp/moviesApp.png';
import travelWebsiteMain from './projectImages/travelWebsite/travelWebsite.png';
import bluetoothPrinterMain from './projectImages/bluetoothThPrinter/bluetoothPrinter.png';
import iotModuleMain from './projectImages/iotModule/IotModule.jpg';

// Klync App Additional Images
import klynk1 from './projectImages/klyncApp/Klynk1.png';
import klynk2 from './projectImages/klyncApp/Klynk2.png';
import klynk3 from './projectImages/klyncApp/Klynk3.png';
import klynk4 from './projectImages/klyncApp/Klynk4.png';
import klynk5 from './projectImages/klyncApp/Klynk5.png';
import klynk6 from './projectImages/klyncApp/Klynk6.png';

// Movies App Additional Images
import moviesApp1 from './projectImages/moviesApp/moviesApp1.png';
import moviesApp2 from './projectImages/moviesApp/moviesApp2.png';
import moviesApp3 from './projectImages/moviesApp/moviesApp3.png';
import moviesApp4 from './projectImages/moviesApp/moviesApp4.png';
import moviesApp5 from './projectImages/moviesApp/moviesApp5.png';

// Travel Website Additional Images
import travelWebsite1 from './projectImages/travelWebsite/travelWebsite1.png';
import travelWebsite2 from './projectImages/travelWebsite/travelWebsite2.png';
import travelWebsite3 from './projectImages/travelWebsite/travelWebsite3.png';
import travelWebsite4 from './projectImages/travelWebsite/travelWebsite4.png';

// Bluetooth Printer Additional Images
import bluetoothPrinter1 from './projectImages/bluetoothThPrinter/bluetoothPrinter1.png';
import bluetoothPrinter2 from './projectImages/bluetoothThPrinter/bluetoothPrinter2.png';

// IoT Module Additional Images
import iotModule1 from './projectImages/iotModule/IotModule1.jpeg';
import iotModule2 from './projectImages/iotModule/IotModule2.png';
import iotModule3 from './projectImages/iotModule/IotModule3.png';
import iotModule4 from './projectImages/iotModule/IotModule4.png';

// Export common images
export const CommonImages = {
  person,
  logo,
  about,
  codeIcon,
  designIcon,
  appIcon
};

// Export project main images
export const ProjectMainImages = {
  klyncApp: klyncAppMain,
  moviesApp: moviesAppMain,
  travelWebsite: travelWebsiteMain,
  bluetoothPrinter: bluetoothPrinterMain,
  iotModule: iotModuleMain
};

// Export project-specific image collections
export const ProjectImages = {
  // Klync App Images
  klyncApp: {
    main: klyncAppMain,
    klynk1,
    klynk2,
    klynk3,
    klynk4,
    klynk5,
    klynk6,
    all: [klyncAppMain, klynk1, klynk2, klynk3, klynk4, klynk5, klynk6]
  },
  
  // Movies App Images
  moviesApp: {
    main: moviesAppMain,
    moviesApp1,
    moviesApp2,
    moviesApp3,
    moviesApp4,
    moviesApp5,
    all: [moviesAppMain, moviesApp1, moviesApp2, moviesApp3, moviesApp4, moviesApp5]
  },
  
  // Travel Website Images
  travelWebsite: {
    main: travelWebsiteMain,
    travelWebsite1,
    travelWebsite2,
    travelWebsite3,
    travelWebsite4,
    all: [travelWebsiteMain, travelWebsite1, travelWebsite2, travelWebsite3, travelWebsite4]
  },
  
  // Bluetooth Printer Images
  bluetoothPrinter: {
    main: bluetoothPrinterMain,
    bluetoothPrinter1,
    bluetoothPrinter2,
    all: [bluetoothPrinterMain, bluetoothPrinter1, bluetoothPrinter2]
  },
  
  // IoT Module Images
  iotModule: {
    main: iotModuleMain,
    iotModule1,
    iotModule2,
    iotModule3,
    iotModule4,
    all: [iotModuleMain, iotModule1, iotModule2, iotModule3, iotModule4]
  }
};

// Export a mapping for the old path format that's used in the constants
export const ProjectImageMapping = {
  'portfolio/KlyncAppImg.png': ProjectImages.klyncApp.main,
  'portfolio/moviesApp.png': ProjectImages.moviesApp.main,
  'portfolio/travelWebsite.png': ProjectImages.travelWebsite.main,
  'portfolio/bluetoothPrinter.png': ProjectImages.bluetoothPrinter.main,
  'portfolio/IotModule.jpg': ProjectImages.iotModule.main
};

// Default export for more flexible importing
export default {
  CommonImages,
  ProjectMainImages,
  ProjectImages,
  ProjectImageMapping
}; 