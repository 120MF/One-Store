/*
 Navicat Premium Data Transfer

 Source Server         : onestore
 Source Server Type    : PostgreSQL
 Source Server Version : 160006
 Source Host           : localhost:5432
 Source Catalog        : onestore
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 160006
 File Encoding         : 65001

 Date: 01/01/2025 00:52:46
*/


-- ----------------------------
-- Table structure for materials
-- ----------------------------
DROP TABLE IF EXISTS "public"."materials";
CREATE TABLE "public"."materials" (
  "id" "pg_catalog"."uuid" NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "description" text COLLATE "pg_catalog"."default",
  "image" bytea,
  "created_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "rack_id" "pg_catalog"."uuid",
  "count" int4 NOT NULL DEFAULT 1
)
;

-- ----------------------------
-- Records of materials
-- ----------------------------
INSERT INTO "public"."materials" VALUES ('05a2ca17-5ac3-4ceb-a435-12bd64bf038d', 'DJIM3508', 'DJI Motor 3508', NULL, '2025-01-01 00:48:57.051632', '9ffb354e-8b6e-486f-b442-21a9e5dad370', 1);
INSERT INTO "public"."materials" VALUES ('cbca8839-d8f3-4745-b56b-90ad9f5da8fc', 'DJIM2006', 'DJI Motor 2006', NULL, '2025-01-01 00:50:07.706259', '9ffb354e-8b6e-486f-b442-21a9e5dad370', 1);
INSERT INTO "public"."materials" VALUES ('55baf3bc-ca2f-4ea8-b6a5-6915044ce24d', 'DJI6010', 'DJI Controller 6010', NULL, '2025-01-01 00:50:37.585848', 'ba480bc6-5c5c-4664-9abf-0998149f0f9b', 1);
INSERT INTO "public"."materials" VALUES ('91edf517-549f-44e1-b59d-b0fbe2a0722c', 'DJI6020', 'DJI Controller 6020', NULL, '2025-01-01 00:50:50.407739', 'ba480bc6-5c5c-4664-9abf-0998149f0f9b', 1);

-- ----------------------------
-- Table structure for racks
-- ----------------------------
DROP TABLE IF EXISTS "public"."racks";
CREATE TABLE "public"."racks" (
  "id" "pg_catalog"."uuid" NOT NULL DEFAULT gen_random_uuid(),
  "code" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "location" varchar(255) COLLATE "pg_catalog"."default",
  "image" bytea
)
;

-- ----------------------------
-- Records of racks
-- ----------------------------
INSERT INTO "public"."racks" VALUES ('9ffb354e-8b6e-486f-b442-21a9e5dad370', '1-1', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('ba480bc6-5c5c-4664-9abf-0998149f0f9b', '1-2', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('120f983e-57e8-43ca-b841-02c8671829f1', '1-3', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('ac1c7643-8263-46c4-80ef-ae3100e5e823', '1-4', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('f2181720-c883-464d-a577-e26d11422a99', '1-5', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('fdecaca5-e7ba-43d6-8e20-4baf5068be9f', '2-1', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('5b028049-d4d4-48ae-9c53-46386b116460', '2-2', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('20cbf150-def3-4c89-920d-9854b913607a', '2-3', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('866d81ed-f576-4f8e-92f0-b442339da2b1', '2-4', NULL, NULL);
INSERT INTO "public"."racks" VALUES ('93f3557c-8b43-4d27-9ef9-ac9ce523f156', '2-5', NULL, NULL);

-- ----------------------------
-- Primary Key structure for table materials
-- ----------------------------
ALTER TABLE "public"."materials" ADD CONSTRAINT "materials_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table racks
-- ----------------------------
ALTER TABLE "public"."racks" ADD CONSTRAINT "racks_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table materials
-- ----------------------------
ALTER TABLE "public"."materials" ADD CONSTRAINT "rack_id" FOREIGN KEY ("rack_id") REFERENCES "public"."racks" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
