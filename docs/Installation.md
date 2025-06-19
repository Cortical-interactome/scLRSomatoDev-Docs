# Installation

There are multiple ways to use scLRSomatoDev, from a simple online version to a local installation for more intensive use.

## Before starting

### Minimum System Requirements

* Processor: 8+ cores (Intel/AMD)
* Memory: 32GB RAM (64GB recommended for Docker)
* Storage: 50GB+ free space
* Display: 1920 x 1080 resolution or Higher
* Operating System: Windows 10/11 (64-bit), macOS 10.15+, or Ubuntu 20.04+

### Download Required Files

1. **Download the project files**:
   * Go to the project's GitHub page.
   * Click on the "Code" tab and select "Download ZIP".
   * Extract the contents of the ZIP file to your desired location.

2. **Download the required data**:
   * Visit our [Zenodo repository](https://github.com/Cortical-interactome/scLRSomatoDev/) (TODO: Finish Zenodo Repo + add URL).
   * Download the `data.zip` file.
   * Extract the contents into your scLRSomatoDev folder.
   * Verify your folder structure matches the following folder structure :

![Folder structure](../img/Folder_structure.png)

## Run scLRSomatoDev

You can run the application in one of three ways:

### Using the Online Version

For easy use, we have set up a dedicated server running scLRSomatoDev that you can access online.

1. Visit our website: [sclrsomatodev.online](http://sclrsomatodev.online/)
2. Click on the "Try the app now!" button.
   
***The application page may take a few minutes to load. Your browser may display an error page at first ("no response from server"), but the app will load after a few moments. We are currently hosted on a server with limited resources, and appreciate your patience.***

### Using RStudio

#### Prerequisites
* **R**: Tested with R versions 4.3.2 and 4.2. [Download here](https://pbil.univ-lyon1.fr/CRAN/).
* **RStudio**: [Download here](https://posit.co/download/rstudio-desktop/).
* **Conda**: [Download Anaconda or Miniconda](https://www.anaconda.com/download/success).

#### Setup Instructions

* Create a conda environment using the provided environment file:
   
```bash
conda env create -f environment_scLRSomatoDev.yml
```

* Activate the environment:
    
```bash
conda activate r_env
```

* Open RStudio and set the working directory to the scLRSomatoDev folder.

* To run the Shiny app, click the 'Run' or 'Play' button in either the `ui.r` or `server.r` file or run the following command in the console:
   
```r
shiny::runApp("app.R")
```
#### Troubleshooting 

Since R can be tricky when managing dependencies, we have included a list of packages in the `environment_scLRSomatoDev.yml` file.

* If you encounter an error, you may need to install the missing R packages. You can do this by running the following commands in the console:

for a single specific package:   
```r
install.packages("package_name")
```
for multiple packages:
```r
install.packages(c("package_name1", "package_name2", "package_name3"))
```
some packages might not be available on CRAN, you can install them from Bioconductor or github using the following command:

for Bioconductor packages:
```r
BiocManager::install("package_name")
```
for github packages:
```r
remotes::install_github("username/repo")
```

We are aware that R packages management and dependencies can be difficult. If you cannot find the package you need, you can ask for help on the [issues](https://github.com/Cortical-interactome/scLRSomatoDev/issues) page.

### Using Docker

#### Prerequisites

* **Docker**: If you don't have Docker installed, please [download and install it](https://www.docker.com/products/docker-desktop/) before proceeding.

#### Setup Instructions

- **Build the Docker image**:
   
```bash
docker build -t sclrshiny .
```

The Docker image build process takes approximately 30 minutes, depending on your system.

- **Run the Docker container**:
   
```bash
docker run --rm -p 3838:3838 -v "/path/to/folder:/app" sclrshiny
```
Replace "path/to/folder" with the path where your Data and www folders are located. For example, if the folders are located in "/home/user/Documents/Data_scLRSomatoDev", run:

```bash
docker run --rm -p 3838:3838 -v "/home/user/Documents/Data_scLRSomatoDev:/app" sclrshiny
```

- **The app will be available at [http://localhost:3838](http://localhost:3838) after a few minutes.**

***You do not have to go through all these steps each time to launch the scLRSomatoDev shiny app. You have to build the image only the first time.***

***For all subsequent times, you just have to run the Docker image and copy the link to your web browser.***

If you encounter any issues, you can ask for help on the [issues](https://github.com/Cortical-interactome/scLRSomatoDev/issues) page.

Once you have installed the app, you can start feeling free to explore the scLRSomatoDev app to discover all the features and functionalities.