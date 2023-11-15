const { execSync } = require('child_process');

try {
  const dependencies = execSync('npm list --depth=0 --json').toString();
  const parsedDependencies = JSON.parse(dependencies);
  const libraries = Object.keys(parsedDependencies.dependencies);
  
 
  libraries.forEach((library) => {
    const version = parsedDependencies.dependencies[library].version;
    console.log(`<dependency>
      <groupId>${library}</groupId>
      <artifactId>${library}</artifactId>
      <version>${version}</version>
    </dependency>`);
  });
} catch (error) {
  console.error('Error extracting dependencies:', error.message);
  process.exit(1);
}
//