interface Person{
  name:string;
  link?:string;
  role?:string;
}
interface Project {
  name: string;
  description: string;
  link?: string;
  teamMembers?: Array<Person>;
  imgUrl ?: string | null
}

interface YearProjects {
  year: number;
  projects: Array<Project>;
}

interface YearResearch {
  year : number,
  researches : Array<Project>
}

export const yearWiseProjects: Array<YearProjects> = [
  //20111
  {
    year: 2011,
    projects: [
      {
        name: "POLLUTION LEVELS USING HYPERSPECTRAL RADIOMETRY",
        description: `Once a scenic river, today the Coovum River is considered to be one of the curses of modern Chennai. 
                      It has become a virtual dump for all the sewage waters of the city and an outlet for many industrial 
                      waste waters too. This pollution, along with many other factors, has caused the mouth of the river to close, 
                      thus preventing the natural cleansing process of the high tide waves of the sea. 
                      All these factors combined have made the river highly polluted. The main aim of the project is to 
                      create a module to monitor the pollution levels and types in the Coovum River using hyperspectral radiometry.
                      This project aims at creating a specific technique for the rapid assessment of pollution levels using 
                      various parameters using hyperspectral radiometry techniques.`,
      },
      {
        name: "VILLNET- a bilingual social networking site",
        description:`This project aims to develop a bilingual social networking site for villagers in Tamil Nadu. The site will incorporate features of popular social networking sites like Facebook and Orkut, but will also include a database of villages, tourist spots, and educational institutions in Tamil Nadu. Each block in Tamil Nadu will be considered a distinct social group, and users will be able to interact with people in their own block as well as other blocks. Block development officers will have the sole right to update the database for their block, including posting notices about events and festivals. General unregistered users will be able to view the different pages updated by BDOs, contact BDOs, and forward funds for the betterment of the villages. This site will help to make the social life of villagers more active and stimulating, and will also provide a platform for communication and coordination between villagers and BDOs. `,
      },
      {
        name: "ONLINE SUBMISSION OF ASSIGNMENT",
        description:"The main aim of the project is to develop a web application for the online submission of assignments. The project supports weekly updates of assignments posted by the staff and the deadline for the same. The students are provided with a separate login through which they need to complete the work before the time limit. Once they submit the assignment, it will go to the respective staff. After the staff grade assignment, the marks of each student will be available only to him through his account and the comments.",
      },
      {
        name: "HIFI SECURITY SYSTEM",
        description:"It's a very new security system capable of offering 100 percent password privacy. The proposed model uses a very simplistic and innovative methodology, which makes password hacking a near impossible thing. It has a 20-digit display and a keypad attached to it. Everyone is provided with a 4-digit password. One important thing to note here is that the password is not a fixed one. For instance, '5-6-17-8' is a password pertaining to a person. This means that the number responding to the position mentioned is the password and not merely the numbers mentioned. (To be more precise, the digits correlating to the 5th ,6th ,17th ,8th positions in the 20-digit sequence are his password.) So even the user knows his password only at the moment of logging in. This security system can effectively replace all the present security systems working under the number domain. So, its field of application is wide enough, ranging from ATM PIN codes to sophisticated military purposes.",
      },
      {
        name : "Location based Services in Mobile Devices",
        description : "This project aims to develop a mobile app that can display the nearest place of interest based on the user's location and choice, and display the appropriate landmark based on the user's to-do list. The app will also display a map of the place as the user is traveling, pointing out their exact location. To achieve this, the app will simulate the movement of the user by running an XML file containing their coordinates in the background. It will then use the user's specified landmark type and current location to find the nearest places of interest. The app will then display the names of these places to the user, and update the list as the user moves. The app will also allow users to create a to-do list of landmarks that they want to visit. The app will then display the appropriate landmark on the map based on the user's current location and their to-do list. Overall, this app will be a valuable tool for tourists and locals alike, providing them with a convenient way to find and visit places of interest."
      },
      {
        name : "Model Paint application in Java",
        description : "This project is aimed at creating a simplified version of MS Paint, especially for physically challenged people. It includes all the basic features that a drawing application would. The main feature is that all tools are accessible with a single click (implemented on the basis of the automatic switching of the default button)."
      },
      {
        name : "BIPED",
        description : "The biped model of a robot that can walk through your space, making you dumbfounded. The capabilities of the bot can be extended to kick a ball, making it a ball bot man. Not all robots that can walk have two legs. Hence, this uses a unique method of weight transfer for the robot without any external measures rather than with basic, simple mechanisms using servos. The desired 2 degrees of freedom (DOF) is achieved with these assemblies. The robot is a 2-servo biped walker featuring two degrees of freedom (DOF) per leg. The robot can walk forward or backward and turn left or right with variable speed. It can even do lots of acrobatic moves. Our combo kits include everything needed to make an operational robot; however, the servos are available separately for those who want to use their own electronics. Moreover, we use a self-balanced mechanism manually assembled to achieve the same movement as a human."
      },
    ],
  },
  //2012
  {
    year: 2012,
    projects: [
            {
              "name": "PETROLERO",
              "description": "Petrolero is an unmanned all-terrain vehicle that was built for traversing rough terrain in remote areas where accessibility is difficult or impossible. The control of the Petrolero is by serial communication; this can be replaced with an XBee transponder for wireless control of the robot. The vehicle can shoot the ball out using a pitching mechanism. The driving mechanism followed is differential drive, with 3-wheels in line on either side. We all must have heard about robots like Reaper, Predator, and TALONs, which are all surveillance unmanned robots built and manufactured by the US Army. Likewise, many countries, like Japan, Russia, and so on, are rapidly improving in this field. However, our country, India, is developing at a slower rate in this field. Therefore, a team of students thought about developing a surveillance vehicle that can be used in battle fields, where the lives of innocent soldiers are at stake. Moreover, these surveillance robots can be used in huge buildings, where the threat is in every nook and cranny. This project not only focuses on surveillance but also on the attack of enemies (i.e., terrorists), while the soldiers are at a safe distance from the hot spot."
            },
            {
              "name": "MILITARY TRANSFORMER ROBOT",
              "description": "The aim is to build a military robot that traverses a predefined path from one military base to another while performing continuous surveillance of the path covered. It is designed to detect the movement of enemy robots. On detecting an enemy, it transforms into humanoid form, indicating combat mode."
            },
            {
              "name": "SOCIAL NETWORKING SITE FOR CEG",
              "description": "Since the current social networking sites do not have several features that will suit the needs of the students at our college and these social networking sites are not intended to improve the students education or develop their knowledge, we have planned to develop a new social networking site exclusively for Cegians. The main aim of this site is to promote the professor-student relationship. This site allows professors and students to register and create profiles of their own. Students and professors are grouped based on their departments. Students can ask questions of their staff and clarify their doubts. A separate platform is provided by this site for the students to register and join NSS/NSO/ncc/yrc and they can also organize group discussions and debates. A subdomain will be provided to each user so that they can develop their own web page."
            },
            {
              "name": "Mobile Design Pattern: Extended audio functionalities for visually challenged users",
              "description": "Mobile devices are used in a variety of contexts, from sedentary to while traveling. They are used for a variety of purposes, from communication to photography to entertainment. With limited display real estate and many processes and applications running simultaneously, it can be challenging to design mobile applications that are both usable and engaging. Audio can be used to enhance the usability of mobile applications by providing an additional interaction medium between the user and the device. This can be particularly beneficial for visually challenged users, who can use audio to communicate with their device and access its features without having to rely on Braille. One way to use audio to enhance the usability of mobile messaging applications is to provide users with the ability to have their incoming messages read aloud. This can be useful for users who are busy or who do not have the time to read their messages manually. Users can also use audio to control their messaging applications, such as asking the device to delete messages or to send replies."
            },
            {
              "name": "MOBILE BASED EFFICIENT IRRIGATION SYSTEM",
              "description": "Water-efficient farming is the need of the hour for our country. The trend among youth is to look for more profit-oriented industrial and trade-related jobs, and farming activities are mostly being done by elders. Moreover, 3-phase electricity is available fully during off-peak hours (during the night). The combination of the above three factors makes agriculture unattractive for many families. This project looks for a solution to the above factors crippling rural India, using technology as a tool."
            },
            {
              "name": "Tamil Computing in Android",
              "description": "A Tamil language application is being developed that can search for historical Tamil poems, display couplets from THIRUKKURAL, generate audio output of Tamil text, and translate THIRUKKURAL into English. This application would be a valuable resource for anyone interested in Tamil language, literature, or culture. It would also be a useful tool for learning Tamil or teaching Tamil to others."
            },
            {
              "name": "Automatic lighting",
              "description": "We often forget to switch off the lights before we leave a room. Also, we use a tube light at times with good natural lighting. To have a solution to this, a simple sensor feedback system can be used on every switch board. Although there is enough technology to implement this, the cost factor and ease of implementation caused a hindrance to taking it to the common man. With almost every house and public place having a lighting source, it is important to save excess and unwanted use of light energy. We plan to add simple, easy, and cost-effective automatic lighting to our living room. We believe automation is just not a luxury; it’s a way to a simpler life."
            },
            {
              "name": "Designing a Stirling engine for the future world",
              "description": "The project aims to design and build a more efficient stirling engine, which is a type of heat engine that can run on a variety of fuels, including solar energy. Stirling engines are more efficient than conventional internal combustion engines and can be used to power motorcycles, cars, cryo-coolers, and air-conditioning devices. The cost of the project will vary depending on the design parameters and materials used, but a working stirling engine can be built for around Rs 10,000-20,000. This project has the potential to reduce pollution and improve efficiency in a variety of applications. If successful, it could pave the way for a more sustainable future."
            },
            {
              "name": "Designing an unmanned surveillance vehicle (USV)",
              "description": "This project aims to develop a working model of an unmanned surveillance vehicle (USV) quadrocopter with integrated HD camera, thermal sensors, GPS, and radio control. This quadrocopter can be used for surveillance and rescue operations in disaster zones, nuclear plants, and fire accidents. The quadrocopter will be equipped with a high-definition camera that can take multiple snaps at a time and send them to a ground station computer. This will allow for real-time monitoring of the affected area and the identification of potential hazards. The quadrocopter will also have thermal sensors that can detect persons trapped in collapsed buildings or other structures. This will be especially useful in earthquake and fire rescue operations. The quadrocopter will be integrated with the global positioning system (GPS) to allow for autonomous operation. This will allow the quadrocopter to fly over the affected area without human intervention, providing continuous surveillance. The quadrocopter can also be controlled manually using a radio remote control. The cost of the project is estimated to be between Rs.15,000-20,000. However, the cost may vary depending on the specific features of the quadrocopter, such as whether it is made fire resistant."
            },
            {
              "name": "Real Time Tracking Using GPS & GIS",
              "description": "GPS and GIS are two powerful technologies that are becoming increasingly integrated. GPS provides accurate location and time information, while GIS allows us to collect, store, analyze, and visualize geographic data. This integration is opening up new possibilities for applications in a variety of fields, such as disaster relief, environmental monitoring, and transportation planning. One example of this integration is the use of GPS-enabled GIS data collection tools. These tools allow users to collect precise geographic data in the field, such as the location of damage after a disaster or the distribution of vegetation in a forest. This data can then be used to create maps and other visualizations that can help decision-makers make informed decisions. Another example of GPS-GIS integration is the use of real-time GIS data use in the field. This allows users to access and update GIS data in real time, which can be useful for applications such as traffic management or emergency response. Overall, the integration of GPS and GIS is a promising development that has the potential to revolutionize the way we collect, analyze, and visualize geographic data."
            },
            {
              "name": "BLUETOOTH BASED VOICE COMMUNICATION USING MANET",
              "description": "This project is about creating voice chat between mobile phones using the Bluetooth concept. The main idea of using this concept is to achieve the idea of having mobile voice chat without the use of a SIM. This idea can be made feasible by implementing the concepts of MANET and SCATTERNET. We already enjoy the availability of voice communication, which is possible through simple phone calls, intercom calls, or voice chats through messengers or gtalks. But this concept of voice chat is something new that can be made available in mobile phones through Bluetooth, which doesn't actually need a sim to proceed with voice chat. Thus, the user does not need to pay for voice chat, and it can be made absolutely free in a limited area. It also doesn’t need any towers to contact, which will be a major advantage. This wireless technology will be enabled in a limited area, which can be extended to nearby areas through mobile devices that currently use Bluetooth. This concept is made feasible by scatternet. Both private voice chat and conference calls can be brought into existence through Bluetooth. This type of new technology will be welcomed in many fields, like the army, CBI, cops, etc., and even among friends. Another new concept that is being used is that people can’t be tracked from where they use their mobile device. And the most interesting thing is that the application of MANET is going to come into existence for the first time through this project."
            },
            {
              "name": "UNIQUE ID MANAGEMENT USING RFID",
              "description": "The main aim of the project is to identify the employees in a company using radio-frequency identification (RFID), which is an automatic identification method relying on storing and remotely retrieving data using devices called RFID tags or transponders. RFID makes it possible to give each product in a grocery store its own unique identifying number, to provide assets, people, work in process, medical devices, etc. all with individual unique identifiers—like the license plate on a car but for every item in the world. This is a vast improvement over paper and pencil tracking or bar code tracking that has been used since the 1970s. With bar codes, it is only possible to identify the brand and type of package in a grocery store, for instance. Furthermore, passive RFID tags (those without a battery) can be read if passed within close enough proximity to an RFID reader. It is not necessary to 'show' the tag to the reader device, as with a bar code. In other words, it does not require a line of sight to 'see an RFID tag'. The tag can be read inside a case, carton, box, or other container, and unlike barcodes, RFID tags can be read hundreds at a time. Bar codes can only be read one at a time. Some RFID tags can be read from several meters away and beyond the line of sight of the reader. The application of bulk reading enables an almost parallel reading of tags. Radio-frequency identification involves the hardware known as interrogators (also known as readers) and tags (also known as labels), as well as RFID software or RFID middleware."
            },
            {
              "name": "Self-sustainable Village through “AGROCHAR”",
              "description": "The concept of “BIOCHAR” has been doing the rounds in the recent past, but its true potential hasn’t been fully recognized yet. Our idea aims to modify this “BIOCHAR” by treating it with nutrients and other supplements for specific crops, thus reducing application losses and resulting in economic savings for the farmer in addition to the various other benefits arising out of the use of “BIOCHAR”. We have decided to call our product as “AGROCHAR”.This idea has the potential to be implemented in the poorest of areas."
            },
            {
              "name": "MOBILE FOR VISUALLY CHALLENGED PEOPLE",
              "description": "As cell phones have become an increasingly conspicuous part of everyday life, they have also become more and more powerful, equipped with computer-operating systems, and more features are being added to every new model. However, their complexity and design have often made them difficult for blind and partially sighted people to use. Before, all input was done through a keyboard, which is the ideal situation for blind people. When touch screens started to emerge, software developers quickly picked up the technology, but it has made it difficult for blind people to avail of those features. A number of factors, including the size and shape of buttons and the size of text and icons on their screens, compound to make their use difficult, or in many cases, impossible. The project is aimed at assisting people who are blind or have low vision to find a suitable mobile phone that meets their needs, whether they want a mobile phone just for emergencies or for using a broader range of features such as text messaging, accessing phone numbers, using the calendar, and even accessing email and internet services."
            },
            {
              "name": "APPLICATION TO KEEP TRACK OF BLOOD DONORS USING LOCATION AWARE DATA",
              "description": "An application was developed to track the location of potential blood donors for a particular blood group so that they could be contacted in times of emergency. The application uses the auto-sync feature in smartphones to extract all the contacts a user has, and the user can store additional details about each contact, such as their blood group, physical ailments if any, and blood sugar level. With all this data, the application creates an emergency list of eligible blood donors from the user's pool of contacts. The people on the emergency list are constantly monitored, and their location is found with the help of location-aware data from their devices. The application is assumed to be ubiquitous, with everyone having it on their smartphones. In case of an emergency, the user can activate the emergency alert with a single touch, and the application will send a message to everyone on the emergency list informing them about the situation and enabling the user to call the blood donor who is nearest to their current location"
            }
    ]
  },
  //2013
  {
    year: 2013,
    projects: [
                {
                  name: "SUB-PIXEL CLASSIFICATION OF MULTI-DATE SATELLITE IMAGES FOR ACCURATE CHANGE DETECTION IN MUTHUPET MANGROVES",
                  description: "Muthupet mangroves form a unique ecosystem, covering a major area along the southeast coast of India. Mangroves are of great ecological, economic, and social significance. Available records reveal that the plant species of Muthupet mangroves were exploited throughout the year for fiber as well as fuel wood by the Chatram department. Because of its multifarious uses and values, the extent of Muthupet mangroves has been reduced over a period of time due to direct and indirect natural and manmade pressures, and hence its protection becomes difficult. The aim of the project is to measure the area of muthupet mangroves using a sub-pixel approach and compare the area with previous years. If there is a reduction in the area compared to previous years, we will inform the forest department about the degradation of the mangroves and their importance and insist that they protect the mangroves in the coming years. Further, area measurements in the forest using surveying instruments take more than a year. But the sub-pixel approach is very accurate and takes less time than surveying techniques. The sub-pixel approach is more accurate than the per-pixel approach in determining area."
                },
                {
                  name: "THE W.A.L.T WATER AIR LAND TRAVELER",
                  description: "This versatile vehicle would serve the project, which includes designing a vehicle that can travel on land defense immensely in terms of stealth and locomotion. The vehicle is an integrated design of the basic mechanisms of a car, a boat, and a helicopter. We have decided that the following applications are feasible with the W.A.L.T: Firefighting or pesticide spraying, Fishing,Rescue Operations, Transportation of cargo, Cleaning a water"
                },
                {
                  name: "HOME AUTOMATION USING GSM",
                  description: "This project is designed to make home automation easy to control when a user is not at home. The project is designed to allow easy use of a mobile phone to control appliances in the home. Using a mobile phone, the development of the control system will be carried out using SMS. This will communicate with the GSM modem, which in turn controls the devices attached to microcontroller modules. When the action has been carried out, a response is sent to the user."
                },
                {
                  name: "Online Picture Management",
                  description: "The social networking website may allow users to share photos and videos, discuss topics of broad applicability, and endorse and augment other users' concerns. It may also automatically tag and categorize photos and videos, be highly dynamic and extensible, and only allow users to have one profile, validated by an email address. The dispute resolution mechanism may be based on social forums like multiple opinions and group actions. The e-resource technology for education may provide students with official and legal links to download resources and study materials for relevant courses. It may only allow users to access specific resources after registering for the corresponding course. It may also associate with professors from esteemed institutes to provide interaction between professors and students, and associate with a well-known publication house to provide students with access to soft copies of published books. The system may implement a time-efficient way to find and access resources, rather than relying on Google search results. AJAX may be used for all registration forms, and IE, NN, Mozilla, and Firefox browsers may be supported. Graphic tools like JASPER may be used for strategic data analysis, and reports may be exportable to .XLS, .PDF, or any other common format."
                },
                {
                  name: "FIRE DETECTION AND EXTINGUISHER ROBOT",
                  description: "The project aims to detect fire in a predefined building with obstacles and extinguish it by an autonomous robot. Navigates in order to overcome the obstacles and follow a path, infrared or ultrasonic sensors and range finders are used."
                },
                {
                  name: "Facebook Tourism app",
                  description: "The Facebook Tourism App is intended to provide tourists and people interested in traveling with a social experience that can be documented and shared with their friends on Facebook. We plan to develop this app with tools from Facebook developers."
                },
                {
                  name: "WATCHMAN WATCHER",
                  description: "A watchman watcher is mainly useful in offices, stores, warehouses, etc. during the night to check whether the watchman of your establishment is on duty or not. A touch sensor can also be fitted with it to know who accessed the place in your absence. This circuit uses the existing telephone closest to the watchman post. Watchman is given an audio alert by ringing the office or store telephone from your residence or from your mobile. The watchman is also given a visual alert signal by a glowing lamp, which remains on for a duration of nearly sixty seconds. After the ringtone, the watchman is instructed to register his presence by pointing his torchlight towards a wall-mounted LDR sensor unit. This is to be done within the time period during which the alert lamp glows. If he fails, then his absence will be registered by incrementing a count. If he does, the count remains unaltered (the count displays the number of times the watchman failed to register his presence)."
                },
                {
                  name: "Automatic braking of vehicle while taking turns at over speed",
                  description: "While vehicles take sharp turns at high speed, they may run off the track, and accidents may happen. So when taking sharp turns, vehicles must be slowed down. If a driver forgets to apply the brake, accidents happen due to inertia. So our project is to apply the brake automatically in turning when the vehicle’s speed is above the critical speed (the critical speed at a particular steer angle is the maximum speed above which the vehicle loses control at that steer angle). The critical speed for each steer angle is determined first and fed into a microcontroller initially. Now the steering angle and the vehicle speed are the inputs to the microcontroller. When the vehicle speed is greater than the critical speed for that steering angle, the microcontroller sends an output signal to activate break automatically. The steering angle is measured by a motion sensor in the steering rack. Speed is measured by the speedometer. The output is given to a servo motor, which operates a mechanism to apply the brake pedal."
                },
                {
                  name: "TRACK YOUR CITY BUS!!",
                  description: "A Global Positioning System (GPS) receiver fitted to the vehicle is used to fetch the latitude and longitude of the vehicle. The position of the vehicle is communicated to the server with the help of a GSM chip embedded in the GPS receiver. The recent position values are fetched on request by the user. The application displays a dynamic map with the position and details about the route, including all the bus stops on the selected bus route. The time of arrival is calculated using the position of the bus (distance from the user-selected bus stop) and the speed limit of the particular area. The first version of this application is web-based. It can be further developed as a mobile application. Certain analyses of the position of the vehicle over a period of time can be made to improve the efficiency and timing of public transport, traffic management, etc."
                },
                {
                  name: "Automatic Brake Sensor",
                  description: "The objective of this project is to prevent road accidents during brake failures in vehicles using an automatic brake sensor. By installing this project in all vehicles, we can prevent a lot of road accidents from happening in our day-to-day lives and thus save our priceless human lives."
                },
                {
                  name: "A Viable Alternative: Glass Fiber-Reinforced Polymer",
                  description: "The project presents an illustration of the advantages of fiber-reinforced polymer composites over steel-reinforcement based on corrosion resistance, light weight, quick installation time, high strength, and lower lifecycle costs. In 2008, the American Association of State Highway and Transportation Officials officially acknowledged the use of fiber-reinforced polymer composites through a publication of standards for their use on bridge decks. If used, fiber-reinforced polymer composites serve to eliminate the potential for corrosion, decrease repair time, and significantly increase the life of structures, which correlates to savings across the board. As such, the objective of this project is to prove that fiber-reinforced polymer composites are economically feasible regardless of their high initial cost. The applications where FRP decks are great matches are movable bridges, historic steel truss bridges, bridges with steel grating, and pedestrian deck additions to vehicle bridges. FRP is required to share the road and cover the superstructure. Through a life cycle cost analysis, this project proves that when comparing a bridge deck with fiber-reinforced polymer composites to a bridge deck with steel-reinforced concrete, the former becomes the cheaper alternative in 20 years."
                },
                {
                  name: "A VIABLE ALTERNATIVE: GLASS FIBER REINFORCED",
                  description: "This project is mainly based on reducing the corrosion effect, which is a major problem faced by hydraulic and marine structures. It reduces the life-time efficiency and serviceability of structures, mainly cross-hydraulic structures like bridges, dams, etc. The base content in marine water affects the reinforcement, which causes failure. In another case, in sewage water, the acid content affects it. So we have to find a better and newer replacement for it. There comes the glass fibers, which are strong against corrosion and also provide very high strength, equal to steel reinforcement. In this matrix, the project use a polymer to get a good binding that is also strong against corrosion."
                }
    ]
  },
  //2014
  {
    year: 2014,
    projects:  [
        {
          name: "Automated Resister Sorting",
          description: "A mechanical system of industry grade that is designed to sort resistors after use It is proposed to be implemented in electronic laboratories in CEG. It makes use of the principle of potential division. The automation is designed for zero human interference and increased productivity. Further, the concept of machine vision was not implemented in the development of this system in order to reduce the cost and make it power efficient, technically making the sorting much faster with less processing power."
        },
        {
          name: "Sewagebot",
          description: "Generally, human scavengers are employed to enter the sewer network to clear the blocks. To change this scenario, a bot is designed that has a 'sophisticated' arrangement to clear the blocks in the drains. They are made with waterproof teflon material, making them robust. Further, an easy manual joystick makes it efficient and easily usable for day-to-day functionalities."
        },
        {
          name: "In-CEG",
          description: "In the era of information technology, the student portal is a single system for the entire student community at CEG. This encourages students to maintain their profiles and add their academic and non-academic accomplishments, which are authenticated and verified by faculty members. Further, the Student Portal maintains a list of ongoing and past events at the college. Notifications and complex search functionalities are further highlights."
        },
        {
          name: "NOMAD",
          description: "Seaside Portable Shop Structure Awareness of environmental conservation and natural aesthetics has kindled the minds of these Civil Engineering students at CEG, who have come up with an eco-friendly, cost-efficient, hygienic, and cheap construction model for seaside shops. This preserves the aesthetic appearance of the beach, its natural beauty, and also aids in commercial development along the shores. They are also used for shelters at beaches, and their applications can be expanded."
        },
        {
          name: "Indigeneous helpline",
          description: "This is a prototype of an indigenous helpline system to communicate with emergency services. Designed with intricate technical competence, the prototype is aimed at providing a complete solution for people who encounter an accident. Combined with the technology of GPS, GSM, and accelerometers, the helpline senses the impact and alerts the ambulance and related services regarding the accident. They are also used for tracking the car in case of theft. Applications with the system can be extended."
        },
        {
          name: "Burgler Buster",
          description: "It is a theft-safe solution for modern-era homes. It is a low-cost yet efficient burglary detection system. Encompassing the technology of lasers and wireless communications, the system is easy to install and also simple in its functioning. The security system of an entire home can be completed with minimal effort by using the principle of optics"
        }
    ]
  },
  //2015
  {
    year : 2015,
    projects :  [
        {
          name: "PSEUDO EYES",
          description: "Pseudo Eyes is a functional prototype that helps visually impaired people. Instead of a walking stick, a wearable waist belt and sensors are used. The headset gives alerts regarding the objects and obstacles they face.",
          imgUrl :'/projects/2015/PSEUDO_EYES.jpg'
        },
        {
          name: "MINE CLOSURE",
          description: "Mine closure is a software product that has been made to detect the presence of various minerals in the mining land after the mining operation has been completed, using satellite data products. The remains are compared to the requirements of agricultural crops in a crop database. The best-fit crop and best strategy for mine closure will be automatically formulated and explained to the user."
        },
        {
          name: "ORAA",
          description: "ORAA is a functional prototype that is used to predict the possibility of an accident and inform the user regarding the danger. The model needs no inter-vehicular communication, which means whether the other vehicles on the road have this system or not, the system will work in the installed vehicle.",
          imgUrl:'/projects/2015/ORAA.jpg'
        },
        {
          name: "WALKING CHAIR",
          description: "The Walking Chair is a functional prototype in which a wheel chair is integrated with a walking mechanism to aid differently abled people to traverse stairs in public places. The vast number of physically disabled people in our society provided the stimulus for this project. The wheelchair that carries them requires ramps at all places for them to be self-reliant. So how about making them self-reliant by replacing the wheels with a dedicated linkage? That’s how the idea of the walking chair was born! With the wheel of the usual wheelchair replaced by the linkage, the chair will now be able to walk. The ladder is designed such that the chair can carry a 15-kg person and climb a staircase with eight steps each of height 15cm.",
          imgUrl:'/projects/2015/WALKING_CHAIR.jpg'
        },
        {
          name: "ROBOTICS SCAVENGER",
          description: "Robotic Scavenger is a functional prototype for the task of cleaning the filthy railway tracks by means of robots. The prototype also aims to solve a social issue by preventing the demeaning job of manual scavenging. The model is programmed to be semi-autonomous as it requires minimum human intervention.",
          imgUrl:'/projects/2015/ROBOTICS_SCAVENGER.jpg'
        },
        {
          name: "WIRELESS RELAY COMMUNICATION",
          description: "Wireless Relay Communication is a functional prototype to design an overcurrent relay that could be fitted on the line itself and communicate information about the occurrence of a fault wirelessly to the control room. By implementing this design, the cost of optical fibers is eliminated. Moreover, this prototype is advantageous in cases where the implementation of an overcurrent relay alone is needed.",
          imgUrl:'/projects/2015/WIRELESS_RELAY_COMMUNICATION.jpg'
        },
        {
          name: "AUTOFIX",
          description: "Auto Fix is a functional prototype that is used to reduce the time taken and the effort of labour to fix the work piece inside a 4-jaw chuck of the lathe machine for the eccentric turning process. It reduces the time spent fixing the workpiece, and hence the process of turning can be done quickly and the rate of production can be increased. This enables the worker to concentrate more on the accuracy and finish of the workpiece. The main objective of this project is to reduce the time taken to fix the job or the cylindrical metal piece inside a 4-jaw chuck of the lathe machine for the eccentric turning process. The major problem in fixing the job is the movement of the chuck, the jaws, and holding the job in the right position, which has to be done simultaneously. This process takes approximately half an hour, which is ineffective. By reducing the time spent fixing the job, the process of turning can be made faster, and the rate of production can be increased. The holes on the top of the chuck are where the chuck key is used to move the jaws inward.",
          imgUrl:'/projects/2015/AUTOFIX.jpg'
        },
        {
          name: "AUTOGREEN",
          description: "Auto Green is a functional prototype that is aimed at enhancing the agricultural scenario in India by automating the irrigation system. Automation of irrigation systems through the internet of things allows remote access to the field, thereby reducing manpower and increasing efficiency. Auto Green is pivotal in developing agriculture and achieving a greener India",
          imgUrl:'/projects/2015/AUTOGREEN.jpg'
        },
        {
          name: "E-GLOVE",
          description: "E-glove is an idea evolved from the safety concerns in our country for women. Many women these days use gloves, considering their personal health and hygiene. This project makes those gloves even more useful. The gloves are equipped with circuitry that provides a high-voltage shock pulse, thus momentarily causing the offender to suffer an electric shock. On the same side, it is very safe for the user wearing it. The sensors embedded in the glove ensure the shock is transmitted only to others and not the host. The circuitry and sensors are miniaturized, making them appear like normal conventional gloves. The project currently aims to work towards fabricating the gloves into a commercial product that would be cheap and affordable to women across the nation.",
          imgUrl:'/projects/2015/E-GLOVE.jpg'
        }
    ]
  },
  //2016
  {
    year : 2016,
    projects : [
        {
          name: "DEXTER BOT",
          description: "Dexter, a humanoid robot capable of motion, also has functional hands. The purpose of the bot is to welcome people. The application of similar bots can be used in fields of photography, cinematography, aiding physically challenged or blind people for their survival, and serving them as a companion. It could also be used as a mascot for inviting chief guests to functions and guest lectures.",
          imgUrl : '/projects/2016/DEXTER_BOT.jpg'
        },
        {
          name: "ASHERAH",
          description: "Asherah serves the need to protect our water resources. Even though the problem of water pollution is burgeoning day by day, we regard surface pollution of water resources more seriously. This became evident with the recent flood in Chennai; it took ages for the water to drain because of the blockage in the drainage system caused by the surface pollutants. Our project would be a first step towards solving this issue and a small contribution to Swachh Bharat.",
          imgUrl : '/projects/2016/ASHERAH.jpg'
        },
        {
          name: "APNEA MONITOR",
          description: "Nowadays,  most infant deaths are mainly due to respiratory blockage, which occurs at the respiratory tract during sleep and is named APNEA. So to prevent their deaths and to alert the respective persons, we have developed a simple monitor. We have prepared a band with a piezoelectric transducer. Since the output signal from the sensor (PZT) is very low, It is amplified by an amplifier. Then it is passed through the comparator part. The band was checked for correction by tying it to a normal person. Finally, we obtained the inhalation and exhalation wave forms of the diaphragm through the piezoelectric transducer. The microcontroller is used for further programming to get the required output. Initially, before sending the message, the monitor starts producing an alert sound. The alarm continues until the receiver is reached. The receiver receives the message as 'APNEA ALERT'.",
          imgUrl : '/projects/2016/APNEA_MONITOR.jpg'
        },
        {
          name: "LAND PROPERTY APP",
          description: "Land property is an online application that can help the public or corporations choose a land based on their needs with the help of online GIS software. The application would contain a base map and options on the side where users can specify the type of land they wish to choose. And based on the need, the application shows the corresponding areas."
        },
        {
          name: "WADS",
          description: "The Wireless Accident Prevention System aims to provide the critical assistance required to rescue victims of road accidents. In the unfortunate event of an accident, an SOS message with the location of the impact site is sent to trusted contacts within seconds of the crash.",
          imgUrl : '/projects/2016/WADS.jpg'
        },
        {
          name: "AIR LOCK",
          description: "The airlock is a new intelligent, secure way to lock and unlock everything without keys, codes, or even a screen. The lock pattern is drawn in the air, and we can take control of who can and cannot, all from our smart phone.",
          imgUrl : '/projects/2016/AIR_LOCK.jpg'
        },
        {
          name: "SWACHH BOT",
          description: "Swachh Bot is a small and compact solid waste cleaning robot with an auto dump facility controlled by mobile using Bluetooth, and it is suitable for small areas.",
          imgUrl : '/projects/2016/SWACHH_BOT.jpg'
        },
        {
          name: "NIU COUNTER",
          description: "NIU COUNTER is a product developed to efficiently sense, count, and display the number of coconuts passed between laborers in a coconut farm, irrespective of the temperature or lighting conditions outside. Used to avoid losses incurred by owners due to cheating by faking the count."
        },
        {
          name: "ABS",
          description: "The project is a cheap and efficient alternative to the conventional ABS (Antilock Braking System) by replacing the electronic unit with a simple mechanical friction mechanism."
        },
        {
          name: "SPYBOT",
          description: "Spybot does live surveillance through a mini camera, and the bot is controlled wirelessly via Bluetooth. It has a sensor that detects the obstacles in front of it, which is connected to a transmitter that transmits the detected range and sends it to the receiver, which is connected to a laptop, and we can obtain the detected distance. It moves both on land and water. It was designed as a tortoise so as to prevent the bot from being found or seen by anyone.",
          imgUrl : '/projects/2016/SPYBOT.jpg'
        },
        {
          name: "FAPS",
          description: "FAPS (Foot-Board Accident Prevention System) integrates our transportation system with our cell phones to better handle crowded buses and avoid accidents.",
          imgUrl : '/projects/2016/FAPS.jpg'
        }
    ]
  },
  //2017
  {
    year : 2017,
    projects : [
            {
              name: "3-D Hologram",
              description: "Till recently, holograms were of the distant future and belonged to popular forms of fictional media. With the rapid advancement of technology, holograms have become something that is no longer out of reach with a little effort. This project was born out of the desire to produce a simple technology to make holograms accessible to anyone for their needs. “For example, when taking a class on biology, a 3D hologram of machinery would provide students with a better understanding than referring to a simple diagram”, says Harini. The image will be recorded on a film, and when a laser light is passed through the film, The 3D image present on the film will be projected into space. If the light is passed from the bottom, the image will be projected on the rear-view screen placed in front of it. A pyramid-like structure will be placed on top of the rear-view screen, such that the pyramid will have four sides of 45 degrees each. The screen will have an image that is to be projected on all four sides of the screen. The image on the rear screen will be projected on the pyramid to form a 3D image in the center of the pyramid. The scope for development of this project is vast. With this project as a base, the future will see several spin-offs of the same catered to one’s personal needs.",
              imgUrl: "/projects/2017/3D_HOLOGRAM.jpeg"
            },
            {
              name: "Servy Bot",
              description: "The future lies in the automation of everyday activities. Akin to this principle, the Servy Bot was created. The Servy Bot aims to reduce the time and effort required for service in the food industry. Designed on a small scale, the Servy Bot caters to any incoming requests within a single room. Considering an office environment where the room is divided into a series of cabins, the Servy Bot not only receives incoming requests but also manages to navigate its way through the environment to reach the desired location. A user may place a request with the help of a mobile application. The request is received by the bot and is then processed. Based on the request, it pinpoints the final destination. The bot is also equipped with an LCD screen to display the current status of the order. The minimum requirement is access to facilities to generate a Wi-Fi hotspot for users to send their requests through the app. Robots of this kind generally implement line-tracing features. However, the Servy Bot is not your mainstream line tracer bot. As opposed to common approaches, it makes use of RFIDs for navigation through the environment. RFIDs are placed at equal intervals to help the bot navigate and determine its proximity to the destination. “The problem with using GPS is that there is always an error of about plus or minus ten meters. We wanted the bot to be able to accurately navigate through the environment, and so we decided to go with RFIDs to eliminate the possibility of errors”, says Raghul. The Servy Bot additionally has the ability to detect the presence of oncoming obstacles. With the help of a sensor, when the bot detects someone approaching it within a five-meter distance, it will stop. When the obstacle leaves the range of the sensor, the bot resumes its activities. Future iterations will see improvements in the external design with a sleeker look.",
              imgUrl: "/projects/2017/SERVY_BOT.jpeg"
            },
            {
              name: "MAGIC MIRROR",
              description: "‘Mirror, mirror on the wall, who’s the smartest of them all?’ With the advent of smart phones, smart devices are making a huge impact in the world of technology. In this day and age, for every invention, there either exists a smart model or it is in development. What better way to join the smart trend than with a smart mirror? Inspired by the aforementioned idea, this year’s edition of Kurukshetra sees a smart mirror made from scratch using a Raspberry Pi as a basis. Given a normal two-way mirror, a monitor is placed behind it. The entire system is powered by a Raspberry Pi running in Chromium’s kiosk mode. This enables data to be pulled from a web server set up on the Pi. By doing so, the display can be updated by modifying the source code in a suitable manner. The advantage of using a Pi is that it can be projected on displays of any size. When the user is done, the mirror reverts to a plain mirror. The mirror is an interactive model where the user may give voice commands to the system, with Amazon’s Alexa voice service as a framework for this feature. The user will have access to a variety of functions, ranging from simple features like date and time display to more complex ones such as updates on current weather, news, upcoming holidays, and even access to one’s notifications from popular social networking sites like Facebook, Quora, and Twitter. In a time where life is incomplete without social media, privacy is also an important feature required in any application that gives one hands-free access to their social media accounts. Akin to this, security features have been incorporated through facial recognition with the help of image processing techniques.",
              imgUrl: "/projects/2017/MAGIC_MIRROR.webp"
            },
            {
              name: "AR CHESS",
              description: "What was once a hidden gem was suddenly brought to light with the release of Pokémon Go. Augmented reality is the next big thing after virtual reality. This year’s edition of Kurukshetra also sees one of its first projects in augmented reality. AR Chess finds its roots in a software called Unity. Using this software, a chessboard-like architecture was developed. Next, the initial location of all the coins as well as possible locations on the board had to be specified, where each coin was treated as an individual working element. Then the chess algorithm was implemented using C# code with alpha-beta pruning. To initiate a game of chess, the user has to open the app. On opening the app, the user is presented with a menu with two options: to either start a new game or exit the application. The new game is initiated with a signal. In the current version of the app, the signal to start a new game is the presence of a 100 rupee note on the camera screen. However, the signal may be customized by the user. When the signal is encountered, the board is simulated on the signal, here being the note. Pieces can be moved with the help of a cursor. On moving the cursor over a piece and clicking it, the list of possible moves from the current position is displayed. On removal of the note, the game vanishes. Once the game has ended, the game vanishes, and the user is redirected to the main menu. One of the difficulties faced in implementing this project was the coding. Algorithms are available for popular languages like Java, but not for C#.",
              imgUrl: "/projects/2017/AR_CHESS.webp"
            },
            {
              name: "AUTOMATED SPHYGMOMANOMETER",
              description: "Traditional models of sphygmomanometers are analog in nature and are generally more preferable to digital sphygmomanometers, leading to an abundance of the former rather than the latter. However, digital sphygmomanometers provide several benefits over conventional models in that they do not require any manual intervention while checking a person’s blood pressure, nor do they lead to any chance of parallax errors while reading the final value. Digital sphygmomanometers are also faster at calibrating blood pressure. To prove this point, the automated sphygmomanometer calibrates the user’s blood pressure via an analog mercury meter and a digital meter, aiming to show that with the advent of advanced technology in the medical field, digitization will help improve even the basic necessities in the medical world. Digital sphygmomanometers on the market are priced between 1500 and 5000 rupees. The reason for the variation is the presence of the pressure sensor. Difficulty arose in the selection of a sensor that would not only be easy on the wallet but also provide the same level of functionality as a high-end sensor model. The construction of both an automated and a manual pressure valve was an equally difficult and time-consuming task to carry out. Moreover, in the pursuit of creating a more compact version of existing sphygmomanometers, the procurement of suitably small components, which were already hard to come by, was another challenge faced by the team",
              imgUrl: "/projects/2017/AUTOMATED_SPHYGMOMANOMETER.jpg"
            },
            {
              name: "SECURITY SYSTEM ACCESS ( Door Automation ) WITH FACE RECOGNITION",
              description: "Long ago, doors were controlled manually. Doors are now getting automated with optic/motion sensors, weight sensors, etc. Security has become the prime concern for everyone in the present scenario. With the advancement of technology, proximity cards, RFID tags, PINs, and passwords are used to access security systems. As these systems can be accessed by any stranger with those PINs and passwords, it becomes more crucial to go for biometric-based analysis. In this work, an attempt has been made to develop a security system that is accessible, affordable, and yet effective. Biometrics is the measurement and statistical analysis of people’s physical and behavioral characteristics. They are broadly divided into identifications of hand geometry, vein pattern, voice pattern, DNA, signature, finger prints, iris pattern, and face detection. As compared with other biometric systems, face recognition has distinct advantages because of its non-contact process. Face images can be captured from a distance without touching the person being identified, and the identification does not require interacting with the person.",
              imgUrl: "/projects/2017/SECURITY_SYSTEM_FACE_RECOGNITION.jpg"
            },
            {
              name: "FINGER PRINT VOTING SYSTEM",
              description: "The prime purpose of this project is to merge the fingerprints of individuals with personal data. This would reduce the manual effort and time taken to cross-check them manually and then permit the person to vote. Through this, it is enough for the public to enter their finger prints. The system will itself cross-verify the entered fingerprint with the person’s fingerprint in the database and hence his or her personal data. Hence, this voting system will reduce manual errors and illegal polling. The principle of this project is derived from the fingerprint-based security system. Here we adapt linking the fingerprint and personal data of a person with the voting details in a highly secured manner such that it is not possible for anyone to see a person’s choice of vote. Microsoft Azure, which is a Microsoft cloud service, is used for the purpose of machine learning and predictive coding.",
              imgUrl: "/projects/2017/FINGER_PRINT_VOTING_SYSTEM.jpg"
            },
            {
              name: "LIFE SAVER",
              description: "Nowadays, we see a lot of people sinking into the sea while bathing. In order to reduce this, we designed a belt that won’t allow people to sink. As we move down the sea, we know that the pressure has been raised. Therefore, we use a pressure sensor to detect the pressure. If the pressure increases to a certain limit, then we allow the two chemicals to react together to form a large amount of air, which permits floating. When the person sinks into the sea water, the pressure sensor detects the pressure and allows the two chemicals to react together to form a large amount of air to fill the balloon, which permits floating. A hand-operating switch (which provides the reaction of two chemicals) is also provided on the equipment.",
              imgUrl: "/projects/2017/LIFE_SAVER.jpeg"
            },
            {
              name: "RADIANCE",
              description: "The main purpose of our project is to help the visually impaired by providing an audio feed of the text on the billboards and sign boards present in their surroundings. This project can warn people in the presence of caution boards. It also enables us to know the information present in the various circulars and other text documents. The techniques incorporated in this project are image processing (optical character recognition) and text-to-speech conversion.",
              imgUrl: "/projects/2017/RADIANCE.webp"
            },
            {
              name: "Portable Robotic Printer",
              description: "In this modern world, electronics have shrunken every device. But printers are not. They’re huge, non-portable, space-consuming, and non-revolutionized. So our main purpose is to make a handy, portable, very small (9cm x 7cm) and PC- or phone-controlled printer that prints at a minimum speed of 2 minutes per A4 page. But this is not a miniaturized version of current printers. These types of printers can be used in a busy world to print minimal documents on the go.",
              imgUrl: "/projects/2017/PORTABLE_ROBOTIC_PRINTER.jpg"
            },
            {
              name: "SMART BIN",
              description: "It is a green technology in the field of mechatronics that aims to conserve power and has a vital role in the Swachh Bharath Campaign. The basic ideology is to crush polyethylene terephthalate bottles. Artificial intelligence makes the bin smart by helping it distinguish between plastics and non-plastics. The user initially brings the plastic bottle close to the opening of the recycling bin. Proximity sensors detect the presence of the bottle and start the motor used to crush the bottle, and at the end of the process, it appreciates the user by rewarding him or her with a Re.1 coin.",
              imgUrl: "/projects/2017/SMART_BIN.avif"
            }
    ]
  },
  //2018
  {
    year : 2018,
    projects : [
        {
          name: "HUMIDITY CONDENSER",
          description: "Aimed at reducing water scarcity in remote areas, the Humidity Condenser is designed to trap atmospheric humidity and condense it into a few liters of water.",
          imgUrl: "/projects/2018/HUMIDITY_CONDENSER.jpg"
        },
        {
          name: "BRAILLE PRINTER",
          description: "This is a printer that automatically prints the Braille text dictated by visually challenged people.",
          imgUrl: "/projects/2018/BRAILLE_PRINTER.jpg"
        },
        {
          name: "CARDIO CARE",
          description: "Cardio Care is a user-friendly, portable, and cost-effective CPR first aid device designed to provide chest compressions in an automatic manner using feedback.",
          imgUrl: "/projects/2018/CARDIO_CARE.jpg"
        },
        {
          name: "SINGLE WHEELED VEHICLE",
          description: "This is a highly efficient, economical, low-energy-consuming, and space-saving electrically operated scooter with a solar charger.",
          imgUrl: "/projects/2018/SINGLE_WHEELED_VEHICLE.jpg"
        },
        {
          name: "AUTOMATIC EQUIPMENT REPAIR SYSTEM",
          description: "An IoT device to assess the maintenance time of equipment using the Raspberry Pi without any human intervention.",
          imgUrl: "/projects/2018/AUTOMATIC_EQUIPMENT_REPAIR_SYSTEM.jpg"
        },
        {
          name: "HEALTH BAND",
          description: "Healthcare device that monitors vital parameters and is designed to meet the needs of both hospitalized and discharged patients through wireless technology.",
        },
        {
          name: "M-SAND PROJECT",
          description: "As an alternative to the high demand for river sand, various types of M-SAND (manufactured sand) are tested to obtain desirable properties and reduce the cost.",
          imgUrl: "/projects/2018/M_SAND_PROJECT.jpg"
        },
        {
          name: "PIEZOELECTRIC ROADS",
          description: "A large-scale implementation of asphalt-polymer roads with piezoelectric sensors to help in large-scale power generation.",
          imgUrl: "/projects/2018/PIEZOELECTRIC_ROADS.jpg"
        },
        {
          name: "LIBRARY SORTER",
          description: "A simple and easy way of sorting the books in a library using RFID chips and RFID guns. Efficient means of placing the right book on the right shelf.",
          imgUrl: "/projects/2018/LIBRARY_SORTER.jpg"
        },
        {
          name: "DRDO LAND SURFACE TEMPERATURE MODELLING",
          description: "This study introduces artificial neural networks (ANNs) for the estimation of land surface temperature (LST) using meteorological and geographical data.",
          imgUrl: "/projects/2018/DRDO_LAND_SURFACE_TEMPERATURE_MODELLING.jpg"
        },
        {
          name: "ENERGY AUDIT",
          description: "This project is aimed at identifying the maximum energy consumption for each department in the system, mapping out the energy lines present in the system, developing a user-friendly EB monitoring system, and identifying the scope for renewable energy sources on campus.",
        },
        {
          name: "HOME AUTOMATION",
          description: "Home automation aims at developing a smart home with control and automation of lighting, heating, ventilation, and security by deploying IoT principles.",
          imgUrl: "/projects/2018/HOME_AUTOMATION.jpg"
        },
        {
          name: "LIFESAVING ASSISTANT",
          description: "Lifesaving assistant is your personal companion who constantly measures your temperature and heartbeat and stores the data on the server.",
          imgUrl: "/projects/2018/LIFE_SAVING_ASSISTANT.jpg"
        }
    ]
  },
  //2019
  {
    year : 2019,
    projects :  [
        {
          name: "SINGLE WHEELED VEHICLE",
          description: "The future of mobility belongs to electric vehicles. This is a highly efficient, economical, low-energy-consuming, less-space-occupying, electrically operated vehicle. It employs the self-balancing concept of using accelerometer and gyroscope sensors and controllers.",
          imgUrl: "/projects/2019/SINGLE_WHEELED_VEHICLE.jpg"
        },
        {
          name: "PNEUMATIC NUT RUNNER",
          description: "Cost-effective and accurate nut runners. Pneumatic Nut Runners offer excellent repeatability and accuracy, making them perfect for various applications. The objective of this project is to design a pneumatic nut runner that operates at 25 Nm torque at a lower cost than the ones commercially available.",
        },
        {
          name: "BANANA PLANTER",
          description: "Automatic planting machine. A cost-effective and durable banana planter is a planting machine that plants the sucker.",
          imgUrl: "/projects/2019/BANANA_PLANTER.jpg"
        },
        {
          name: "HYDRO ENGINE",
          description: "A greener alternative. This project could be an eco-friendly alternate source of energy, addressing the growing concern about the adverse impact of petroleum on the environment and the quest for alternative power systems for vehicles.",
          imgUrl: "/projects/2019/HYDRO_ENGINE.jpeg"
        },
        {
          name: "SMART JACK",
          description: "A boon for elderly and physically challenged drivers. Use of an automated hydraulic jack to help elderly and handicapped people replace flat tires.",
          imgUrl: "/projects/2019/SMART_JACK.jpg"
        },
        {
          name: "BOOK SEEKER",
          description: "'BOOK SEEKER' is a handheld device that could swiftly fetch our desired books in a library. This RFID-based device finds the required book with the accession number of the book entered via Bluetooth on our mobile.",
          imgUrl: "/projects/2019/BOOK_SEEKER.jpg"
        },
        {
          name: "MUSCLE BIOMECHANICS DETECTOR",
          description: "A novel method for estimating muscle tension. This detector involves sports biomechanics for estimating the maximum degree of freedom to prevent muscle or tendon tear and the allowable degree for prevention.",
          imgUrl: "/projects/2019/MUSCLE_BIOMECHANICS_DETECTOR.jpg"
        },
        {
          name: "FOLDABLE STRUCTURES",
          description: "Portable structures that are easily foldable. It serves a great deal as shelter during natural disasters like floods and cyclones.",
          imgUrl: "/projects/2019/FOLDABLE_STRUCTURES.jpg"
        },
        {
          name: "AMENITIES-APP",
          description: "An application to print documents directly from the mobile phone in a networked environment. This app saves time and prevents students from waiting in long lines.",
        },
        {
          name: "REHABILITATION OF DAMS",
          description: "A new, cost-effective solution for spillways and the volume of water lost due to siltation is presented. This is done by increasing the height of the storage by providing modified Piano Key Weir over the ungated spillways.",
          imgUrl: "/projects/2019/REHABILITATION_OF_DAMS.jpg"
        },
        {
          name: "SMART DIAPER",
          description: "Prevention in the palm of your hand. This device, when paired with the smartphone app, allows caregivers to monitor diaper status continuously, saving time compared to periodic physical checks.",
          imgUrl: "/projects/2019/SMART_DIAPER.png"
        },
        {
          name: "PROPELLER SCREEN",
          description: "This project creates a POV (persistence of vision) display that can be controlled via Wi-Fi to show images of any format. The power supply is provided through electromagnetic induction.",
          imgUrl: "/projects/2019/PROPELLER_SCREEN.jpg"
        },
        {
          name: "UNMANNED AERIAL VEHICLE",
          description: "An unmanned aerial vehicle (UAV) is an aircraft that carries no human pilot or passengers, also called 'drones'. It is piloted remotely and is currently reconstructed with machine learning and face recognition for real-time applications.",
        },
        {
          name: "CARDIO TIP",
          description: "ECG at your fingertip. The project is to develop a portable and user-friendly mobile case for obtaining an ECG.",
          imgUrl: "/projects/2019/CARDIO_TIP.jpg"
        },
        {
          name: "LORA-BASED BUS LOCATOR",
          description: "This project proposes an alternative method, LoRa wireless transmission, to the conventional public transport tracking systems, which use GPS.",
        }
      ]
  },
  //2020
  {
    year : 2020,
    projects : [
        {
          name: "BOREWELL RESCUER",
          description: "This project was developed with the aim of rescuing children who have fallen into bore wells in a safer and more efficient manner as compared to the conventional methods that are currently being used.",
          imgUrl: "/projects/2020/BOREWELL_RESCUER.jpg"
        },
        {
          name: "FACE ANGLE DETECTOR",
          description: "To identify the angle that the neck makes with respect to the spine of the body. This helps us identify the angle of bending and thereby avoid neck sprains and muscle damage due to the long-term usage of mobile phones, laptops, and other gadgets that involve bending the neck at odd angles.",
          imgUrl: null
        },
        {
          name: "NAVIGATION SYSTEM FOR THE BLIND",
          description: "This project was developed to help blind people navigate through congested areas without any assistance. This is done by giving vibratory feedback to their fingers based on the position and orientation of the obstacle with respect to the user.",
          imgUrl: "/projects/2020/NAVIGATION_SYSTEM_FOR_THE_BLIND.jpeg"
        },
        {
          name: "ROAD ACCIDENT ALERT AND RESCUER",
          description: "To help persons injured during accidents by providing means for them to contact the closest hospital. The hospital is given relevant details about the location, contact details, and extent of the damage sustained by the victim due to the accident within a given time frame.",
          imgUrl: null
        },
        {
          name: "AUTOMATED PORTABLE FARM LAND",
          description: "To make a portable farmland for urban homes that is completely automated and can be remotely farmed using IoT.",
          imgUrl: "/projects/2020/AUTOMATED_PORTABLE_FARM_LAND.jpg"
        },
        {
          name: "MOVABLE-TYPE COTTON PICKER",
          description: "To design and fabricate a movable type of cotton picker. This will reduce the burden on manual laborers and will help in the efficient picking of cotton. Since more cotton can be picked per day, more profits can be made by the cotton farmer.",
          imgUrl: "/projects/2020/MOVABLE_TYPE_COTTON_PICKER.jpg"
        },
        {
          name: "WIRELESS ELECTRICITY",
          description: "The main objective of this experiment is to demonstrate the process of wireless power using the concept of resonant energy transfer.",
          imgUrl: null
        },
        {
          name: "ZERO CARBON CHALLENGE",
          description: "To convert the exhaust CO2 from automobiles into liquid CO2, which can be used for manufacturing of limestone, chalk, and marble. This project will enable us to lower CO2 levels in the atmosphere and thereby lower pollution levels in India.",
          imgUrl: "/projects/2020/ZERO_CARBON_CHALLENGE.jpeg"
        },
        {
          name: "SINGLE WHEEL SCOOTER (SWS)",
          description: "To promote a vehicle in vehicle transportation, that is, it can be transported via other vehicles quite easily, to promote eco-friendly, energy-efficient personal transportation.",
          imgUrl: "/projects/2020/SINGLE_WHEEL_SCOOTER.jpg"
        },
        {
          name: "SMART 3R AND DISTRIBUTION SYSTEM",
          description: "The aim of this project is to reduce, reuse, and recycle (3R) paper. A machine to do so was developed and placed in a public place. This machine returns paper products, such as notebooks, charts, etc., in exchange for the paper that was deposited in the machine.",
          imgUrl: "/projects/2020/SMART_3R_AND_DISTRIBUTION_SYSTEM.jpeg"
        }
      ]
  },
  //2021
  {
    year : 2021,
    projects : [
      {
        name: "XII(TH) MAN CRICKET BOWLING MACHINE",
        description: "In the process of blending engineering into the sport, the 'XII(th) MAN' cricket bowling machine uses no electrical source and could perform all the features (different speeds up to 140 kmph, lengths, lines, off-spin, leg-spin) of a highly equipped electric bowler at a cost rate cut down considerably to 10–20% of it, targeting small-scale coaching institutes and colleges owing to our machine’s reliability and its cost.",
        imgUrl: "/projects/2021/XII(TH)_MAN_CRICKET_BOWLING_MACHINE.png"
      },
      {
        name: "MACHINE HOLE SCAVENGING BOT",
        description: "The machine-hole scavenger bot is the answer to the problem faced by manual scavengers in the act of discrimination by society. The main objective of the bot is to eradicate manual scavenging and bring advancement to society. The bot contains a standing unit and a drone unit. The standing unit is for stabilizing the bot, and the drone unit is used to carry out the waste removal process inside the manhole. This bot works based on the parallel manipulator, which has six degrees of freedom (DOF). This is a cost-efficient bot in comparison to existing scavenging bots. The goal here is primarily to develop a machine-hole scavenger bot that could clean manholes by taking out solid wastes that block the liquid flow through the sewage system.",
        imgUrl: "/projects/2021/MACHINE_HOLE_SCAVENGING_BOT.jpg"
      },
      {
        name: "BOREWELL RESCUE BOT",
        description: "India is facing a distressed, cruel situation wherein the previous years' several child deaths have been reported falling in the bore well. As the diameter of the bore well is quite narrow for any adult person and the lights go dark inside it, the rescue task in those situations is a challenging task. Here we are proposing a robotic system that will attach a harness to the child using pneumatic arms for picking up. The main aim of the project is to save the child who had accidentally fallen into the borewell hole. Our bot’s main objective is to save the child with minimal injuries.",
        imgUrl: "/projects/2021/BOREWELL_RESCUE_BOT.jpg"
      },
      {
        name: "INTELLIGENT LINE MARKING BOT",
        description: "The intelligent line marking bot is an autonomous guided navigation bot that helps in marking field lines even on rough ground accurately with less time. It uses sensor fusion and advanced path planning algorithms to achieve the same. Robots are used in various fields for enormous applications. The issue we addressed is marking field lines manually on a sports field, especially on gravel or sand grounds, which may lead to errors and high time consumption. So we have designed an autonomous navigation line marking bot that can complete this process with ease. Our robot is aimed at providing accurate marking of any field within a shorter time frame using sensor fusion algorithms to fuse various sensors to accurately localize the robot. A path-planning algorithm is then used to navigate the robot to the end position.",
        imgUrl: "/projects/2021/INTELLIGENT_LINE_MARKING_BOT.jpg"
      },
      {
        name: "COVID QR APPLICATION",
        description: "CEG’s COVID-19 trace-back application, COVID QR, can effectively trace COVID and identify possible COVID-19 patients to inhibit the spread of the disease. The application primarily relies on a simple QR code-to-location logging mechanism and a central user database for its operation. The key software components used in this application are a Java-based Android Studio outline, Firebase, and SQLite databases for data storage and query. The application is simple, lightweight, and user-friendly and does not require any location or Bluetooth access.",
        imgUrl: "/projects/2021/COVID_QR_APPLICATION.jpg"
      },
      {
        name: "INTELLIGENT BRAKING SYSTEM",
        description: "In Intelligent Braking System, the digital input of the accelerometer is obtained. The load transfer is determined by kinematic considerations. All these calculations are manipulated digitally using an Arduino (UNO)-type board. The output of the Arduino is fed into a servo motor. The necessary torque is transmitted to a lead screw attached to the motor. As a result, the clevis position changes based on the input of the accelerometer. When the pedal is pressed manually, the load is applied to the sleeve, and based on the position of the balance bar, the load is split between the front and rear circuits. The end effect is observed by the piston travel in the front and rear master cylinders. This whole automated work keeps changing throughout the motion. Based on the dynamic load transfer at the various velocities of the vehicle, the braking force applied at the pedal is distributed accordingly to the front and rear master cylinders. The distribution of the braking force is achieved with the help of balance bars fixed at a certain position based on the safe limit of the braking force. The project deals with the adjustment of the balance bar position based on the input of the accelerometer and the manipulation of the Arduino board. This makes the entire braking system more effective and efficient.",
        imgUrl: null
      },
      {
        name: "E TRANSMISSION",
        description: "One of the main problems faced by car drivers is engaging the clutch while starting to move the car, as frictional clutches are very difficult to operate and engage manually. Hence, in this project, a new kind of transmission system will be developed that has an electromagnetic clutch mechanism that has no use of gearings and is achieved by the principles of electromagnetism and electromagnetic induction. E-transmission is an advanced, non-contact type of electromagnetic transmission. This couples the engine to the gearbox electromagnetically, allows engine speed to vary independently of the vehicle's speed, and also reduces the number of gears required.",
        imgUrl: "/projects/2021/E_TRANSMISSION.jpg"
      },
      {
        name: "LICENSE PLATE RECOGNITION SYSTEM",
        description: "License Plate Recognition is to detect vehicle number plates and recognize the number using OCR. This system maintains a database of the license numbers of the vehicles entering the campus. The main objective of the project is to identify vehicles by their license plate using machine learning. This can be done using a trained model to detect the license plates and applying OCR to get the license number. This vehicle number is then uploaded to the database.",
        imgUrl: "/projects/2021/LICENSE_PLATE_RECOGNITION_SYSTEM.jpg"
      },
      {
        name: "MESS MANAGEMENT SYSTEM",
        description: "The mess management system aims at digitalizing the existing hostel mess system to reduce manpower and paper and to keep track of the students' mess entry and token system. This project is about mess management, which aims to reduce the manpower involved in maintaining the distribution of food to the students in our college mess. The distribution of non-vegetarian tokens to students has been done manually, and the mess employees have to ensure that no student gets the token twice. The paper egg tokens are used. These tokens are given as a bunch. Sometimes a student may not use all the tokens. The student has to scan the ID card to get non-veg. The system will verify, and the student can get the non-veg if the green light glows. The student has to scan an ID card once to get an egg. The fee will be added as per the number of times, ID card is scanned by the student. An easily maintainable application for the mess in charge that has checkboxes and a complaint register. Plastic token dispenser replaces paper tokens for vegetables (green token), non-vegetarian meals (red token), and eggs with an RFID reader.",
        imgUrl: null
      },
      {
        name: "BIKE SAFETY SYSTEM",
        description: "Motorized accidents on many motorways are caused by a driver’s response to a sudden threat. Response timing plays a vital role when the vehicle goes at higher speeds. For instance, if the driver goes at 60 km/hr, the one-second delay in response time causes him to travel an additional 16 meters, excluding braking distance. Our objective is to reduce the reaction time. Supposedly, vehicle motion when braking occurs must comply with the physical principle of following the kinematics concepts of non-uniform motion slowing down between the driver and obstacles in front and the concept of non-uniform circular motion slowing down on the wheels of a motorized vehicle. For this reason, the Bike Safety System was created using the principles of non-uniform motion slowing down and non-uniform circular motion slowing down. The aim of this work is braking optimization with distance and speed variables obtained from the ultrasonic sensor and IR sensor mounted on a motorized vehicle. These components are controlled by the Arduino platform.",
        imgUrl: "/projects/2021/BIKE_SAFETY_SYSTEM.jpg"
      },
      {
        name: "GAS LEAKAGE DETECTION AND AUTO BOOKING",
        description: "Our device is a multi-functional one that performs gas leakage safety operations using a pump, detects the gas level in the cylinder, and automatically books a new one. The sensor attached near the cylinder will detect and measure the intensity of the leakage. Based on that data, a pump that is attached outside of the kitchen starts to run and vary its RPM according to the intensity of the gas in the kitchen, exhausting the gas until the leakage intensity becomes negligible or below a dangerous level. The alerting systems (Buzzer and Auto Calling) can alert residents and nearby people. The load cell attached to a ring where the cylinder is placed measures the weight of the cylinder, and when it goes down beyond a certain value, our auto-booking system will be triggered and will book a new cylinder.",
        imgUrl: "/projects/2021/GAS_LEAKAGE_DETECTION_AND_AUTO_BOOKING.jpg"
      }
    ]

  },
  //2022
  {
    year : 2022,
    projects : [
      {
        name: "3D VIRTUAL MAP",
        description: "An interactive application to show the beauty of CEG, the amazing architecture of the different buildings, the ambience created by the natural surroundings, and the variety of other amenities within the campus A user can get a virtual tour throughout the campus and could also get the shortest path from each location to every other location within the campus. The user can also walk manually through the map, exploring the different places at their own pace, with the use of a toggle. ",
        imgUrl: null
      },
      {
        name: "CEG APP",
        description: "In the present, when information is shared through Instagram or WhatsApp about the happenings in college, not everyone gets access to the same information or maybe misses out on the forwarded messages in the groups. In order to tackle this situation and also to create an in-house social media platform, or rather, a forum, we have come up with the idea to create a web and mobile application where each CEGian will have his or her personal access and can visit or follow various clubs or departments in the application itself and stay up-to-date with the common functions in college and the department-specific activities as well. This app will also feature different pages of all the CEG clubs, and students can get access to them all on the same platform. Every page will have a forum where interactions between the student and the respective page admin can also take place.",
        imgUrl: null
      },
      {
        name: "E TRANSMISSION",
        description: "One of the main problems faced by car drivers is disengaging the clutch while starting the car. The frictional clutches are very difficult to operate and engage manually. Hence, Our project is to develop a new transmission system that is achieved by the principles of electromagnetism and electromagnetic induction. This doesn’t need a synchromesh gearbox for transmission.",
        imgUrl: "/projects/2022/E_TRANSMISSION.jpg"
      },
      {
        name: "INTELLIGENT BRAKING SYSTEM",
        description: "Based on the dynamic load transfer at the various velocities of the vehicle, the braking force applied at the pedal is distributed accordingly to the front and rear master cylinders. The distribution of the braking force is achieved with the help of balance bars fixed at a certain position based on the safe limit of the braking force. The project deals with the adjustment of the balance bar position based on the input of the accelerometer and the manipulation of the Arduino board. This makes the entire braking system more effective and efficient. Hence, it makes an intelligent braking system.",
        imgUrl: null
      },
      {
        name: "INTELLIGENT LINE MARKING BOT",
        description: "iLMBt (intelligent Line Marking Bot) is an autonomous wheeled mobile robot that is modelled and designed to mark the lines of sports fields without any human intervention. A hopper mechanism is built in to control the flow of powder, which is controlled by a motorized lead screw. An effective dampening system is designed for the smooth operation of the robot. With the given coordinates, iLMBt calculates the desired path, and the required line is marked. A collision avoidance program is included with the path tracking algorithm to smoothly maneuver around obstacles while reaching the required starting point. iLMBt eliminates human labour in marking sports fields and also improves the accuracy of the lines.",
        imgUrl: "/projects/2022/INTELLIGENT_LINE_MARKING_BOT.jpg"
      },
      {
        name: "MACHINE HOLE SCAVENGER BOT",
        description: "Manual scavenging, an inhumane activity, is still happening all over the world despite strict laws. In India, every year, hundreds of people die due to manual scavenging, and Tamil Nadu stands second in this cruelty. Many manual scavengers died due to the inhalation of poisonous gases from the manhole. Thus, our aim is to bring a machine for the necessary change. Under the Indian Government's Safai-Mitra Suraksha Challenge on November 20, 2020, we, the team ScavengeX, are in the process of converting the manholes to machine holes. This advanced semi-automatic robot has its own unique way of cleaning both the horizontal and vertical sewer lines of manholes without any human intervention, and this operation is made easier by using state-of-the art mechanisms with unique manipulation techniques designed for extreme situations, intelligent robot path planning and control algorithms, and first-in-segment implementation of image processing and machine learning techniques. We are working on achieving 90% localization of the product, thus lowering the cost and reaching poor parts of the country,thus acting as a savior for the lives of manual scavengers by upgrading them to the level of machine operators.",
        imgUrl: "/projects/2022/MACHINE_HOLE_SCAVENGER_BOT.jpg"
      },
      {
        name: "NOTIFY",
        description: "Notify is a cloud-based app that enables users to manage the schedules of a group of people. It serves as a medium through which various information related to academics can be shared. We are trying to make this app available for a wide range of students, including university students, where many combinations of staff are possible, and other college and school students, where there will be a fixed set of staff for each class. ",
        imgUrl: null
      },
      {
        name: "PROTOWBOT",
        description: "Many of the services these days have become self-operated. Be it self-checkout counters or booking tickets, you no longer need a middleman to handle these services, and facilities have been provided to do it on your own in your comfort. With that intent, we are designing a bot, ProTowBot, that focuses on towing vehicles that have broken down or been punctured. Instead of struggling in the middle of the road and hoping for the towing service to come to your rescue, you can take it into your own hands with this bot. Though the primary aim is to tow vehicles, this could also be applied to towing heavier goods in warehouses too. The compact design makes the bot portable. The RC controller makes it easy to handle the bot. The bot can also be controlled on your mobile phone through an app exclusively developed for the ProTowBot.",
        imgUrl: null
      },
      {
        name: "RAIN SENSING SHELTER",
        description: "In this busy world, many working adults and students find it difficult to dry their clothes in the changing weather. Our project presents the design of an automatic, expandable, and retractable shelter that protects the cloth from highly humid and rainy environments. The above design was created in Solidworks. Our future action is to implement this idea in agricultural fields and truck covering systems.",
        imgUrl: null
      },
      {
        name: "VOICE CONTROLLED ROBOTIC VEHICLE",
        description: "This project, Voice-Controlled Robotic Vehicle, helps to control robots through voice commands received via an Android application. The integration of the control unit with the Bluetooth device is done to capture and read voice commands. The robotic vehicle then operates as per the command received via the Android application. This microcontroller is integrated into the system, which makes it possible to operate the vehicle via an Android application. The controlling device may be any Android-based smartphone, tablet, etc. with an Android OS. The Android controlling system provides a good interactive GUI that makes it easy for the user to control the vehicle. The transmitter uses an Android application for transmitting the data. The receiver reads these commands and interprets them to control the robotic vehicle. The Android device sends commands to move the vehicle in forward, backward, right, and left directions. After receiving the commands, the microcontroller then operates the motors in order to move the vehicle in four directions. The communication between the Android device and receiver is sent as serial communication data. The microcontroller program is designed to move the motor through a motor driver IC as per the commands sent by the Android device.",
        imgUrl: null
      },
      {
        name: "WASTE SKIMMER BOT",
        description: "In India, there are many water bodies that are not regularly cleaned or monitored. Due to this, waste gets accumulated in the long run, causing clogs and blockages of water flow in water channels. These channels of water provide drinking water in many regions but are presently not of any use due to contamination. We live in a society where people who dump waste are greater in number than those trying to remove it. So, the concentration of untreated waste is increasing dramatically, leading to severe consequences now as well as in the years to come. Currently, all water bodies are cleaned manually with manpower and heavy machinery, which is not economically feasible and causes severe health hazards working in such conditions for a prolonged time frame. Addressing the above issues, we propose our project idea, ‘Waste Skimmer Bot’, an automated bot that can skim or remove floating contaminants on the surface of still water bodies and pack them into reusable bags for easier disposal with minimal use of manpower and in a much more cost-efficient way. Our key idea is to reduce the area over which wastes are spread to a much smaller region, where they can then be easily retrieved later. Our goal is to clean our bodies of water, helping them return to their former glory.",
        imgUrl: null
      },
      {
        name: "XII MAN CRICKET BOWLING MACHINE",
        description: "The XII(th)MAN is a cricket bowling machine that enables a batsman to practice (usually in the nets) and to hone specific skills through balls being bowled at the desired length, line, and speed. It can also be used when there is no one available to bowl, no one of the desired style or standard, or to reduce the workload of bowlers. In the process of blending engineering into sport, we came up with the project of a cricket bowling machine that uses no electrical source and could perform all the features (different speeds up to 140 kmph, lengths, lines, off spin, leg spin) of a highly equipped electric bowler at a cost rate cut down considerably to 10–20% of it, targeting small-scale coaching institutes and colleges owing to our machine’s reliability and its cost.",
        imgUrl: "/projects/2022/XII_MAN_CRICKET_BOWLING_MACHINE.png"
      }
    ]

  },
  //2023
  {
    year : 2023,
    projects : [
      {
        name: "AGRI SPRAYING DRONE",
        description: "An unmanned aerial vehicle (UAV), commonly known as a drone, is an aircraft without any human pilot crew or passengers on board. UAVs are a component of an unmanned craft system, which includes adding a ground-based controller and a system of communications with the UAV. One such UAV includes the Multi-Action Drone. It is a multipurpose drone with distinct characteristics.",
        imgUrl: null
      },
      {
        name: "AMPHIBIOUS BOT",
        description: "The Amphibious Bot is an advanced military surveillance project designed to operate seamlessly on land and water. The project utilizes advanced technologies, such as the Raspberry Pi platform, along with a range of sensors and custom-designed components, to enhance its surveillance capabilities. The custom-designed 3D-printed individual rocker arm suspension ensures stability and performance, while Flask enables a dynamic webpage displaying real-time sensor data, live video streaming, and intuitive controls for bot movement.",
        imgUrl: null
      },
      {
        name: "AU HITCH HANDLER",
        description: "It is very common for students to face issues with the college management. To benefit both the student body and the college management, we have come up with a solution. AU Hitch Handler is a complaint app that collects data on issues that students face from the college administration. This app ensures that the complaint is resolved in every way possible. Machine learning algorithms and natural language processing (NLP) are used to automate the process in this project.",
        imgUrl: null
      },
      {
        name: "CEG E VEHICLE TRACKER",
        description: "E-vehicles at Anna University are a mode of commutation for students inside the campus premises. They have a fixed schedule, but at times they tend to deviate from the schedule. Waiting for the E-vehicles without knowing when they will arrive will be a hassle. The tracker app project aims to address this issue. The tracker app allows for easy access to the e-vehicle. This app allows users to track the e-vehicle's location within the university campus every minute and provides a pickup intimation to the driver.",
        imgUrl: null
      },
      {
        name: "DIGIDOC",
        description: "Adequate access to health care has always been a concern for both urban and rural residents. DigiDoc provides an efficient way to manage patient portfolios, including scans and diagnostic reports, prescriptions, medical histories, and all the details you need. DigiDoc is a centralized platform that allows you to conveniently schedule doctor appointments, find nearby available clinics, and share medical data with medical centers. Extensive use of machine learning can warn users of potential future health risks based on past medical records. DigiDoc can also find verified doctors specifically for your medical records.",
        imgUrl: null
      },
      {
        name: "ELECTRO SPEED TRACKER",
        description: "Tired of the speed breakers? These setbacks will not bother you anymore. We have a solution for the same. The speed breaker power generator is our brand new project. It is based on generating electric energy with minimal inputs. In this system, power is produced by a rack and pinion mechanism. When a vehicle mounts on the speed breaker, the stress placed on the springs is converted into a rotating motion by the rack and pinion system. The input for energy production is the vehicle's weight. Unconventional energy sources will enable us to produce power at a lower cost.",
        imgUrl: "/projects/2023/ELECTRO_SPEED_TRACKER.jpg"
      },
      {
        name: "FARMENIENCE",
        description: "The Farmenience project aims to connect farmers directly to markets, businesses, and non-governmental organizations (NGOS) without the use of a middleman. For additional benefits, this project will be built in two forms: an e-commerce web application and a mobile application. The Al assistance in this project guides farmers on how to use it wisely.",
        imgUrl: "/projects/2023/FARMENIENCE.jpg"
      },
      {
        name: "LAPTOP CASE X COOLER",
        description: "Why is your laptop overheating? Your laptop is overheating because of insufficient cooling. Potential reasons include dust blocking the intake grills or exhaust ports, a clogged-up fan, or degenerating thermal paste or thermal pad. The project aims to provide a multifunctional laptop case with an embedded cooler. The Case X Cooler can be used to carry the laptop around and can be used as a stand as well as a cooling system. It has good storage space as well as a secure accessory and charger compartment.",
        imgUrl: "/projects/2023/LAPTOP_CASE_X_COOLER.jpg"
      },
      {
        name: "M2O",
        description: "We all know the water cycle. What if this process could be carried out by a device that converts water vapor to usable water on the surface of the earth? M20 is a project aimed at exactly that. Atmospheric water generators (AWG) convert water vapor present in high-humidity areas into potable water. Humidity is a measure of the amount of water vapor present in the air. This ambitious project is helping combat water scarcity in such areas. Moisture is abundant in the air in areas of high humidity, and the AWG takes advantage of this to partially solve the problem of water scarcity. AWG filters are also designed to fit in a bottle, making them portable and space-saving in your home or community.",
        imgUrl: null
      },
      {
        name: "PILL DISPENSER",
        description: "Medications can help with pain relief and relaxation, but they also come with a lot of responsibility. Taking the right medication at the right time is difficult enough, but it becomes even more difficult when multiple vials, missed doses, and tablet storage are considered. The Automatic Pill Dispenser Project seeks to address this issue. The automatic pill dispenser is integrated into a mobile app and provides 24-hour customer service to help you improve your health and medication management. It reminds patients to take the appropriate medication at the appropriate time and dose on a daily basis.",
        imgUrl: null
      },
      {
        name: "LUCIFER AI ARM",
        description: "Thanos snaps his fingers to end the world. Isn't it cool to possess powers at your fingertips? Lucifer The Al Arm project is one of a kind. This project aims to create a robotic arm that can assist people with hand disabilities (disabilities above the elbow and shoulder). It works by recognizing and categorizing electromyography using signals from muscle machine-learning algorithms. This robotic hand will be propelled by servo and actuation motors.",
        imgUrl: null
      },
      {
        name: "REGEN",
        description: "Moving a magnet around a coil of wire, or moving a coil of wire around a magnet, pushes the electrons in the wire and creates an electrical current. The Regen project aims to generate electricity based on the fundamental principles of electromagnetic induction and eddy current for converting kinetic energy into electrical energy. The electrical energy obtained is used to recharge batteries or other efficient energy storage devices.",
        imgUrl: null
      },
      {
        name: "ROBOT OF BLIND",
        description: "The blind robot is a small, three-wheeled robot that will replace guide dogs for blind people. The bot will be attached to a leash, and given your destination, it will drag you there in the shortest path calculated. The bot will guide you to your destination using GPS and voice commands. An obstacle avoidance system is also included to ensure the person's safety.",
        imgUrl: null
      },
      {
        name: "WINCLEAN BOT",
        description: "Even a small amount of dust is enough to trigger OCD. The WinClean bot is an autonomous robot used to clean windows. This has many advantages over traditional window cleaning methods. First and foremost, it is automatic or nearly automatic, so no user intervention is required. The second advantage is that it takes a fraction of the time to clean a window compared to a human doing the same job. Third, it has the ability to clean windows that are difficult for humans to access, such as skyscraper windows. The process is safe for the environment and users, as it cleans windows without the use of chemicals.",
        imgUrl: null
      }
    ]

  },
  //2024
  {
    year : 2024,
    projects : [
        {
          name: "SIGNAL SAFARI",
          description: "Signal Safari seeks to assess signal strength from key cellular operators across the college campus.The project's focus is on creating a dynamic, automated mapping system that visually illustrates real- time network coverage.By providing insights into signal strength variations, this initiative aims to enhance the overall understanding of network performance for students and administrators on campus.",
          imgUrl: null
        },
        {
          name: "SEIGEI",
          description: "Seigei's a project that serves to serve two historically disadvantaged communities - the deaf and the mute of India. The project leverages ML to allow for an Indian Sign Language (ISL) interpreter capable of interpreting pre- recorded videos and a video chat application taking advantage of real - time interpretation.",
          imgUrl: null
        },
        {
          name: "PREFABRICATED STRUCTURES",
          description: "Research paper on modern construction technique, which involves pre-fabrication and 3D printing of concrete with BIM-integrated components, mainly focusing on joints and crack formation. This also covers the study of sustainability aspects.",
          imgUrl: null
        },
        {
          name: "TYPLOTIC EYE",
          description: "The project Typlotic Eye aims to make Braille prints easily available to everyone by producing them on tabletop LaserJet printers. The existing toner powder on the LaserJet printers is replaced with a specialized polymer-based toner and is used to give an embossed effect to the Braille text.",
          imgUrl: null
        },
        {
          name: "PREDICTX",
          description: "This project delves into the vital realm of predictive maintenance for industrial dies, addressing the need to enhance their reliability while minimizing downtime and costs. By leveraging data-driven methods such as machine learning, we aim to revolutionize maintenance practices. This project offers insights into the transformative potential of predictive maintenance, promising improved operational efficiency and equipment reliability in industrial contexts.",
          imgUrl: null
        },
        {
          name: "ROOFING",
          description: "The choice of insulation material is crucial for reducing carbon emissions in construction. Natural materials like straws, wool, hemp, and coconut coir are ideal for tropical regions. The project aims to create eco-friendly roofs with rice straw, reducing health risks and promoting sustainability.",
          imgUrl: null
        },
        {
          name: "SOLENIXIC POWER PULSE",
          description: "Introducing the prototype of a collaborative solenoid-IC engine. The goal of this engine is to combine the efficiency of an internal combustion engine with the eco- friendly advantages of an electric vehicle. This engine works by integrating the principle of electromagnetic induction with the transformer principle.",
          imgUrl: null
        },
        {
          name: "TACTICAL MILITARY DRONE",
          description: "The project is about an advanced military surveillance drone featuring cutting- edge technology. This drone features include Anti-Reflection (AR) coating, Active Noise Cancellation (ANC) and Optical illusion system. The drone is remotely controlled through a secure wireless interface, ensuring precise and covert mission execution.",
          imgUrl: null
        },
        {
          name: "UDHIRA",
          description: "This project focuses on creating organized communication through an application interface with medical units and blood banks to solve urgent blood requirements on behalf of the college. It also includes the verification and authentication of blood requirements. Students will receive real-time notifications about donation opportunities.",
          imgUrl: null
        },
        {
          name: "SELF BALANCING DELIVERY BOX",
          description: "This innovative self-balancing box utilizes a gyro design to enhance balance, minimizing the risk of damage during transit. With integrated shock absorption materials, it ensures structural integrity and safeguards perishable goods from potential shifts in orientation. This provides a reliable solution for secure transportation of delicate materials.",
          imgUrl: null
        }
      ]
  },
  //2025
  {
    year : 2025,
    projects : [
        {
          name: "3D PRINTED CONCRETE 3DPC",
          description: "This project aims to address the key limitations of 3D-printed concrete (3DPC) by developing solutions for challenges such as vertical reinforcement, high cement content, sustainability issues, cold joints, and fractures. By building a model of a 3D-printed element that overcomes these challenges, the project seeks to make 3DPC technology more feasible and widely acceptable in civil engineering. The objectives include accelerating infrastructure development, reducing construction time from months to days, minimizing costs, and cutting construction waste. The proposed methodology incorporates innovative approaches such as reinforcing with carbon fiber mesh for vertical strength, introducing coarse aggregate to reduce cement content and enhance sustainability, using supplementary cementitious materials (SCM) to decrease cement dependency, applying bonding agents to resolve cold joint issues, and incorporating macro fibers to prevent fractures and improve performance. This initiative aims to revolutionize 3DPC, making it a faster, more cost-effective, and sustainable construction solution.",
          imgUrl: null
        },
        {
          name: "AN ENGAGED CAMPUS NAVIGATION SYSTEM FOR ANNA UNIVERSITY AN AR EXPERIENCE",
          description: "This project focuses on developing an Augmented Reality (AR) application for Anna University on the Android platform using ARCore SDK. The application will enhance campus navigation by allowing users to scan buildings using their smartphones and access real-time information such as department details, faculty profiles, building history, and upcoming events. The project also integrates 3D modeling using photogrammetry to create accurate virtual representations of the buildings.The AR application will significantly improve campus navigation and accessibility by enabling students, visitors, and faculty to interact with buildings in real-time. Additionally, the app streamlines building inspections and accreditation processes by providing instant access to detailed building information and maintenance records. This project leverages cutting-edge AR and 3D modeling technologies to provide a scalable, efficient, and engaging solution for both campus navigation and facility management.",
          imgUrl: null
        },
        {
          name: "LASER GALVANOMETER",
          description: "This project focuses on developing a precise and efficient dimension-measuring device using a laser galvanometer, aimed at simplifying and accelerating measurement in manufacturing. The system uses two perpendicular mirrors in the x-axis and z-axis to deflect a laser based on supplied current, projecting a straight line that aligns with the object being measured. A microcontroller, pre-calibrated with measurement data, translates the current into accurate dimensions. This approach ensures high precision for both large and small components, offering a cost-effective and time-efficient alternative to traditional tools. Future advancements could enable measurements of complex shapes, further enhancing its versatility for quality control in manufacturing.",
          imgUrl: null
        },
        {
          name: "GREEN CONDITIONER",
          description: "This project develops an innovative ohmic contact-based room cooler and heater to efficiently regulate room temperature using a compact ceiling-mounted heat exchange system. The system integrates heat-absorbing and emitting terminals made from advanced materials like semiconductors and thermal fillers. In summer, the terminals extract and dissipate heat, while in colder seasons, they reverse the flow to warm the room. A specialized air circulation system enhances heat exchange by directing room air to the terminals, ensuring consistent temperature regulation.The design is space-efficient, ideal for small rooms, and reduces installation complexity. By utilizing thermal conduction instead of compressors or refrigerants, the system is energy-efficient, cost-effective, and eco-friendly, significantly lowering power consumption and carbon emissions. This minimalistic, sustainable approach offers a smarter alternative to traditional HVAC systems.",
          imgUrl: null
        },
        {
          name: "HYBRID 3D PRINTER",
          description: "The hybrid pneumatic-SLA 3D printer integrates pneumatic extrusion and UV laser-based stereolithography. It combines the ability to print high-viscosity materials like silicones and biopolymers using compressed air with the precision of UV light curing for liquid resin. This multi-process approach enables printing of complex geometries, multi-material structures, and composites. It offers a wider range of material compatibility, faster production, and improved versatility compared to conventional 3D printers, providing a solution for diverse industrial and biomedical applications.",
          imgUrl: null
        },
        {
          name: "HYDRAULIC POWERED CYCLE",
          description: "This project seeks to transform a standard bicycle by replacing its traditional gear system with a hydraulic hybrid system. The high torque generated by the hydraulic pistons will enable the bicycle to move without the need for constant pedaling, reaching a certain speed before transitioning to a regenerative braking system. The braking system will recharge the actuator fluid, making the system energy-efficient. In cases where regenerative braking isn’t sufficient, the pedals will act as a manual pump, pressurizing the hydraulic fluid and recharging the actuator to continue operation. This design aims to offer a sustainable, low-maintenance, and efficient alternative to both traditional and electric bicycles",
          imgUrl: null
        },
        {
          name: "INTELLIGENT TRAFFIC SIGNAL SYSTEM FOR AMBULANCE PRIORITY USING GPS",
          description: "This project focuses on developing an innovative Ambulance Monitoring App aimed at revolutionizing emergency response systems. The app leverages real-time GPS tracking and AI-driven optimal route suggestions to ensure ambulances reach their destinations swiftly. By integrating with traffic management systems, the app communicates with traffic signal control to clear pathways for ambulances, minimizing delays. Real-time traffic information and road conditions further enhance route efficiency. A unique feature is its collaboration with local authorities, enabling police to manage traffic signals manually while AI algorithms recommend changes based on ambulance location, speed, and traffic density. This dual approach ensures adaptability and precision. The app’s cost-effective design utilizes Google Maps API for real-time data, reducing expenses compared to proprietary systems.Ultimately, this app aims to save lives by reducing delays in emergency medical services through efficient coordination between emergency responders and traffic authorities, setting a new standard in emergency response technology.",
          imgUrl: null
        },
        {
          name: "OMEGAWATCH",
          description: "This project aims to develop an AI-powered system to improve rescue operations during disasters by generating optimal escape and excavation routes from building plans, industrial layouts, and geospatial data. The AI processes inputs like 3D models (AutoCAD, Revit), 2D layouts, and geo-referenced TIFF files, converting them into navigable maps using image processing and file-to-map conversion tools. Pathfinding heuristics such as A* and Dijkstra’s algorithms dynamically generate escape routes, avoiding obstacles for faster rescuer access. CNNs enhance the AI’s ability to identify critical features like exits, walls, and potential victim locations in real time. The system integrates geospatial mapping tools like QGIS and ArcGIS to adapt navigation paths to varying disaster scenarios, including fires, floods, and earthquakes. Rescuers benefit from 2D and 3D visualizations of layouts with excavation paths, offering a preemptive plan for operations. Testing in simulators like Gazebo or Unity3D ensures real-world applicability and refinement.",
          imgUrl: null
        },
        {
          name: "SOLENIXIC PHASE 2",
          description: "This prototype of a collaborative solenoid-IC engine combines the efficiency of internal combustion with the eco-friendly benefits of electric vehicles. Using electromagnetic induction and transformer principles, the engine integrates electric and fuel energy. A primary coil generates static magnetic flux, while a secondary coil reciprocates, converting electrical to mechanical energy. Fuel combustion reverses this process, inducing current to recharge the battery and enhance mileage. The solenoid mechanism boosts compression and combustion efficiency, delivering balanced torque. This sustainable innovation offers a lighter, more efficient hybrid solution, easing the transition from IC engines to electric vehicles while retaining E-vehicle advantages.",
          imgUrl: null
        },
        {
          name: "THE TYPLOTIC EYE",
          description: "The project 'The Typlotic Eye'seeks to develop an affordable method for printing Braille text using a table top LaserJet printer. Instead of relying on the traditional mechanical embossing process which is expensive and time-consuming, this project works on using a specially formulated toner mixture which would enable the printer to create raisedBraille dots on regular paper by increasing the amount of toner deposited. By enhancing the toner’s adhesion to the photoconductor drum and optimizing the deposition process, the project aims to produce embossed prints on Maplitho paper, making Braille printing more accessible and cost effective. The goal is to make Braille printing more accessible and affordable by using a specially formulated toner mixture that can create embossed Braille dots, allowing for high-quality and durable Braille prints on Maplitho substrate with digital printing technology.",
          imgUrl: null
        }
      ]
  }
];

export const yearWiseResearch: Array<YearResearch> = [
  //2025
  {
    year : 2025,
    researches : [
      {
        name: "Artificial Time Machine (A.T.M)",
        description: "This research explores leveraging Extended Reality (XR) for advancements in surveillance, communication, and device simulation. It focuses on three key areas. First, the 'Artificial Time Machine' integrates 360-degree video feeds from multiple cameras to monitor areas over time, allowing users to review past events in a 3D space. This system has applications in security, training, and education, enabling tasks such as revisiting lectures or analyzing activities, with data stored locally or on cloud-based platforms for easy access. Second, real-world communication in XR replaces avatars with live camera feeds to create more immersive and lifelike interactions. For instance, one individual’s activities can be streamed to another via VR headsets, simulating face-to-face communication in real-time. Lastly, the research emphasizes device simulation in VR, using Unity and MATLAB to model systems like Arduino and motors for performance analysis. This allows accurate testing and evaluation of devices in virtual environments before real-world implementation. By combining these innovations, XR is positioned to significantly enhance security, education, communication, and engineering applications.",
        imgUrl: null
      },
      {
        name: "Carbon Guage",
        description: "This project aims to develop a web-based platform that shows the amount of carbon emitted in a core industry. This project will use the formulas such as Energy Consumption, Carbon Emissions, Embodied Carbon of Waste and it also used with the cutting fluid consumption, cutting tool data, and material processed. This will lead to give the amount of carbon emitted in a core machines. This data will also be displayed with charts to show which process emits more amount of carbon. This will help to give an idea of how much carbon is being emitted by a single or many machines with a period of time. This website will also give a limitation of the govt of that country and will give whether this much amount of carbon emission within the limit or not. This will give an overview of how much carbon is being emitted by these machines.",
        imgUrl: null
      },
      {
        name: "Electric Propulsion System",
        description: "This research aims to enhance Hall effect thrusters for electric propulsion, focusing on increasing thrust efficiency, supporting India's ISRO initiative, and advancing space missions with reduced costs and propellant consumption",
        imgUrl: null
      },
      {
        name: "Glacier Motion",
        description: "This study proposes an integrated approach to monitoring glacial motion using DInSAR, SBAS-InSAR, and Persistent Scatterer (PS) techniques. While traditional methods are time-consuming, these InSAR techniques provide efficient and accurate alternatives. DInSAR measures surface deformation but is affected by atmospheric and topographic noise, which SBAS-InSAR mitigates by forming small-baseline interferograms. PS techniques further enhance precision by identifying stable points for long-term monitoring. By combining these methods, the approach improves accuracy, spatial coverage, and temporal resolution, enabling detailed detection of glacial motion. This integrated methodology offers a robust tool for studying glacier dynamics and their role in climate change.",
        imgUrl: null
      },
      {
        name: "GROUNDWATER QUALITY MAPPING USING MULTIFACTOR ANALYSIS",
        description: "This research maps groundwater quality in Tirunelveli using multifactor analysis to assess the impact of geology, aquifers, land use, and industrial activities. By integrating data from remote sensing sources (Landsat, Hyperion, Sentinel), groundwater levels (WRIS), and soil nutrients (GEE), it identifies potable water hotspots, areas of declining quality, and regions suited for agriculture. Using GIS and geospatial techniques, the study also creates a cropping suitability map to aid agricultural planning. The findings provide a sustainable framework for managing groundwater, addressing issues like saline intrusion and industrial contamination, and supporting rural and urban water needs.",
        imgUrl: null
      },
      {
        name: "PRECISION AGRICULTURE ACCURACY ASSESSMENT USING OPEN-SOURCE SATELLITE IMAGERY",
        description: "This study evaluates the accuracy of open-source satellite imagery compared to ground-based data from sensors, drones, and UAVs for precision agriculture. Using multispectral, hyperspectral, and microwave remote sensing, it analyzes soil moisture, vegetation indices, and crop growth stages in a degraded agricultural area. By integrating diverse data sources, the research identifies crop failure nodes, models contributing factors with multivariate regression, and validates results through comparative analysis. The findings aim to enhance predictive agricultural modeling and support interventions to boost resilience in vulnerable regions.",
        imgUrl: null
      }
    ]

  }
]



//  link : "https://gogul11.github.io/portfolio",
//         teamMembers: [
//           {
//             name: "Arjun R",
//             role: "Frontend Developer",
//             link: "https://www.linkedin.com/in/arjunr"
//           },
//           {
//             name: "Meera S",
//             role: "Backend Developer",
//             link: "https://www.linkedin.com/in/meeradev"
//           },
//           {
//             name: "Karthik M",
//             role: "UI/UX Designer",
//             link: "https://dribbble.com/karthikdesigns"
//           }
//         ]