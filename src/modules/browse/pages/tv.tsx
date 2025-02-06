"use client";

import { useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { channelsSchema } from "@/modules/browse/browse-schema";

import {
  type AudioSrc,
  type DASHSrc,
  type HLSSrc,
  type VideoSrc,
  type VimeoSrc,
  type YouTubeSrc,
} from "@vidstack/react";

import { Card, CardContent } from "@/components/ui/card";

import { PlayerDialog } from "@/components/player-dialog";

import { useChannelsCategory } from "../api/use-channels-category";
import { useChannelsProvider } from "../api/use-channels-provider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export const Tv = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [src, setSrc] = useState<
    AudioSrc | VideoSrc | HLSSrc | DASHSrc | YouTubeSrc | VimeoSrc
  >();

  const { data: categoryData } = useChannelsCategory();

  const { mutate, data } = useChannelsProvider();

  const form = useForm<z.infer<typeof channelsSchema>>({
    resolver: zodResolver(channelsSchema),
  });

  const onSubmit = async (values: z.infer<typeof channelsSchema>) => {
    mutate({ json: values });
  };

  return (
    <section className="max-w-screen-xl mx-auto px-2 sm:px-6 py-2 space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Label>Seleciona un categoría:</Label>
          <div className="flex items-start gap-2">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categoryData?.categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id.toString()}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Buscar canales</Button>
          </div>
        </form>
      </Form>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {data &&
          data?.channels.map((live) => {
            if (live.providerChannels.length <= 0) return null;

            return (
              <Card
                key={live.id}
                className="cursor-pointer p-0"
                onClick={() => {
                  setSrc({
                    src: live.providerChannels[0].src,
                    type: live.providerChannels[0].type as HLSSrc["type"],
                  });
                  setName(live.name);
                  setIsOpen(true);
                }}
              >
                <CardContent className="p-6">
                  <img src={live.image} alt={live.name} />
                </CardContent>
              </Card>
            );
          })}

        <PlayerDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          name={name}
          src={src!}
        />
      </div>
    </section>
  );
};
