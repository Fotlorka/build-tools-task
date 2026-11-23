[1mdiff --git a/build.gradle.kts b/build.gradle.kts[m
[1mindex c4ec6b0..f933270 100644[m
[1m--- a/build.gradle.kts[m
[1m+++ b/build.gradle.kts[m
[36m@@ -34,4 +34,34 @@[m [mtasks.withType<KotlinCompile> {[m
 }[m
 [m
 [m
[31m-// TODO: your code starts here[m
\ No newline at end of file[m
[32m+[m
[32m+[m[32mval npmInstall by tasks.registering(Exec::class) {[m
[32m+[m[32m    workingDir("ui")[m
[32m+[m[32m    commandLine("cmd", "/c", "npm", "i")[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mval compileUi by tasks.registering(Exec::class) {[m
[32m+[m[32m    workingDir("ui")[m
[32m+[m[32m    commandLine("cmd", "/c", "npm", "run", "build")[m
[32m+[m[32m    dependsOn(npmInstall)[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mval copyUi by tasks.registering(Copy::class) {[m
[32m+[m[32m    dependsOn(compileUi)[m
[32m+[m
[32m+[m[32m    from("ui/dist/index.html")[m
[32m+[m[32m    from("ui/dist/app.js")[m
[32m+[m[32m    from("ui/dist/css") {[m
[32m+[m[32m        into("css")[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    into("src/main/resources")[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mtasks.named("processResources") {[m
[32m+[m[32m    dependsOn(copyUi)[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mtasks.withType<org.springframework.boot.gradle.tasks.run.BootRun> {[m
[32m+[m[32m    dependsOn(copyUi)[m
[32m+[m[32m}[m
\ No newline at end of file[m
